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
}
