import { Component, OnInit, inject } from '@angular/core';
import { Veiculo } from '../../models/veiculo';
import { FuncionariosService } from '../../services/funcionarios.service';
import { VeiculoService } from '../../services/veiculo.service';
import { NgClass } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-veiculos',
  imports: [NgClass, FormsModule, MatIconModule],
  templateUrl: './veiculos.component.html',
  styleUrl: './veiculos.component.css'
})
export class VeiculosComponent implements OnInit {

  estiloLinhas: boolean = true //Verifica se o estilo escolhido é de linhas (true) ou colunas (false)
  modoEdicao: boolean = false //Permite editar os dados dos veículos
  confirmacaoApagar: boolean = false
  veiculoExcluir: Veiculo | null = null
  veiculoEdit: Veiculo | null = null
  arquivoSelecionado!: File | null;
  previewImagem!: string | ArrayBuffer | null
  listaVeiculos: Veiculo[] = []
  private _snackBar = inject(MatSnackBar)

  constructor(
    private serviceFuncionarios: FuncionariosService,
    private serviceVeiculos: VeiculoService
  ) {
  }

  ngOnInit() {
    this.listaVeiculos = this.serviceVeiculos.listarVeiculos()
  }

  statusLogado() {
    return this.serviceFuncionarios.statusLogado()
  }

  statusVeiculo(veiculo: Veiculo): boolean {
    return this.serviceVeiculos.statusAnuncio(veiculo)
  }

  statusVeiculoTexto(veiculo: Veiculo) {
    return this.statusVeiculo(veiculo) ? "Disponível" : "Indisponível"
  }

  statusBotaoCancelarOuAtivar(veiculo: Veiculo) {
    return this.statusVeiculo(veiculo) ? "Cancelar" : "Ativar"
  }

  setAnuncioStatus(veiculo: Veiculo) {
    this.serviceVeiculos.setAnuncioStatus(veiculo)
    this.exibirMensagemConfirmacao(this.statusVeiculo(veiculo) ? "Anúncio ativado" : "Anúncio cancelado")
  }

  setEstiloLinhas() {
    this.estiloLinhas = !this.estiloLinhas
  }

  excluirAnuncio(id: string) {
    this.serviceVeiculos.excluirAnuncio(id)
    this.setConfirmacaoApagarModal()
    this.listaVeiculos = this.serviceVeiculos.listarVeiculos()
    this.exibirMensagemConfirmacao("Anúncio apagado com sucesso!")
  }

  getTamanhoScrollbar() {
    return window.innerWidth - document.documentElement.clientWidth
  }

  setModoEdicao(veiculo?: Veiculo) {
    if (veiculo) {
      this.veiculoEdit = { ...veiculo }
      this.modoEdicao = true
    } else {
      this.modoEdicao = false
      this.veiculoEdit = null
    }

    document.body.style.paddingRight = this.modoEdicao ? `${this.getTamanhoScrollbar()}px` : '0px'
    document.body.style.overflow = this.modoEdicao ? 'hidden' : 'auto'
    this.previewImagem = null
    this.arquivoSelecionado = null
  }

  alterarImagem(event: Event) {
    const input = event.target as HTMLInputElement
    if (input.files && input.files.length > 0) {
      this.arquivoSelecionado = input.files[0]
      const reader = new FileReader()
      reader.onload = () => {
        this.previewImagem = reader.result
      }
      reader.readAsDataURL(this.arquivoSelecionado)
      this.veiculoEdit!.caminho_imagem = this.arquivoSelecionado.name
    }
  }

  setConfirmacaoApagarModal(veiculo?: Veiculo) {
    if (veiculo) {
      this.veiculoExcluir = { ...veiculo }
      this.confirmacaoApagar = true
    } else {
      this.confirmacaoApagar = false
      this.veiculoExcluir = null
    }

    document.body.style.paddingRight = this.modoEdicao ? `${this.getTamanhoScrollbar()}px` : '0px'
    document.body.style.overflow = this.modoEdicao ? 'hidden' : 'auto'
  }

  salvarEdicao(veiculo: Veiculo) {
    this.serviceVeiculos.salvarEdicao(veiculo)
    this.listaVeiculos = this.serviceVeiculos.listarVeiculos()
    this.setModoEdicao()
    this.exibirMensagemConfirmacao("Anúncio editado com sucesso!")
  }

  exibirMensagemConfirmacao(mensagem: string) {
    this._snackBar.open(mensagem, "OK")
  }
}