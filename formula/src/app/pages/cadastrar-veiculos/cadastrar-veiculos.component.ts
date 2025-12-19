import { Component } from '@angular/core';
import { Veiculo } from '../../models/veiculo';
import { VeiculoService } from '../../services/veiculo.service';

@Component({
  selector: 'app-cadastrar-veiculos',
  imports: [],
  templateUrl: './cadastrar-veiculos.component.html',
  styleUrl: './cadastrar-veiculos.component.css'
})
export class CadastrarVeiculosComponent {
  // veiculo: Veiculo = Veiculo.newVeiculo()

  // constructor(
  //   private service: VeiculoService,
  // ){}

  // adicionar(){
  //   this.service.adicionar(this.veiculo)
  // }

  uploadImage = '/assets/imagens/uploadImage.webp'
  arquivoSelecionado!: File;
  previewImagem!: string | ArrayBuffer | null
  alterarImagem(event: Event){
    const input = event.target as HTMLInputElement

    if (input.files && input.files.length > 0){
      this.arquivoSelecionado = input.files[0]
      const reader = new FileReader()
      reader.onload = () => {
        this.previewImagem = reader.result
        console.log(reader.result)
      }
      reader.readAsDataURL(this.arquivoSelecionado)
    }
  }
}
