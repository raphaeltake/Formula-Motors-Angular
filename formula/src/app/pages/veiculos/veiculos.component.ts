import { Component } from '@angular/core';
import { Veiculo } from '../../models/veiculo';
import { FuncionariosService } from '../../services/funcionarios.service';
import { VeiculoService } from '../../services/veiculo.service';
import { NgClass } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-veiculos',
  imports: [NgClass, FormsModule, MatIconModule],
  templateUrl: './veiculos.component.html',
  styleUrl: './veiculos.component.css'
})
export class VeiculosComponent {

  estiloLinhas: boolean = true //Verifica se o estilo escolhido é de linhas (true) ou colunas (false)
  modoEdicao: boolean = false //Permite editar os dados dos veículos
  veiculoEdit: Veiculo | null = null
  arquivoSelecionado!: File | null;
  previewImagem!: string | ArrayBuffer | null

  constructor(
    private serviceFuncionarios: FuncionariosService,
    private serviceVeiculos: VeiculoService
  ) {
  }

  listaVeiculos() {
    return this.serviceVeiculos.veiculos
  }

  statusLogado() {
    return this.serviceFuncionarios.statusLogado()
  }

  statusVeiculoTexto(veiculo: Veiculo) {
    return this.serviceVeiculos.statusAnuncio(veiculo) ? "Disponível" : "Indisponível"
  }

  statusBotaoCancelarOuAtivar(veiculo: Veiculo) {
    return this.serviceVeiculos.statusAnuncio(veiculo) ? "Cancelar" : "Ativar"
  }

  setAnuncioStatus(veiculo: Veiculo) {
    this.serviceVeiculos.setAnuncioStatus(veiculo)
  }

  setEstiloLinhas() {
    this.estiloLinhas = !this.estiloLinhas
  }

  excluirAnuncio(id: string) {
    this.serviceVeiculos.excluirAnuncio(id)
  }

  getTamanhoScrollbar() {
    return window.innerWidth - document.documentElement.clientWidth
  }

  setModoEdicao(veiculo?: Veiculo) {
    if(veiculo){
      this.veiculoEdit = { ...veiculo}
      this.modoEdicao = true
    } else{
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
    }
  }
}
