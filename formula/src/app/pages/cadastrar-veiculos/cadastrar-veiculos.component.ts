import { Component, inject } from '@angular/core';
import { Veiculo } from '../../models/veiculo';
import { VeiculoService } from '../../services/veiculo.service';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cadastrar-veiculos',
  imports: [FormsModule],
  templateUrl: './cadastrar-veiculos.component.html',
  styleUrl: './cadastrar-veiculos.component.css'
})
export class CadastrarVeiculosComponent {
  veiculo: Veiculo = Veiculo.newVeiculo()
  uploadImage = '/assets/imagens/uploadImage.webp'
  arquivoSelecionado!: File;
  previewImagem!: string | ArrayBuffer | null
  private _snackBar = inject(MatSnackBar)

  constructor(
    private service: VeiculoService,
  ) { }

  adicionar() {
    this.service.adicionar(this.veiculo)
    this.veiculo = Veiculo.newVeiculo()
    this.previewImagem = ''
    this.exibirMensagemConfirmacao()
  }

  alterarImagem(event: Event) {
    const input = event.target as HTMLInputElement

    if (input.files && input.files.length > 0) {
      this.arquivoSelecionado = input.files[0]
      const reader = new FileReader()
      console.log(this.arquivoSelecionado.name)
      reader.onload = () => {
        this.previewImagem = reader.result
        // console.log(reader.result)
      }
      reader.readAsDataURL(this.arquivoSelecionado)
      this.veiculo.caminho_imagem = this.arquivoSelecionado.name
    }
  }

  exibirMensagemConfirmacao() {
    this._snackBar.open("Veículo adicionado com sucesso!", "OK")
  }
}
