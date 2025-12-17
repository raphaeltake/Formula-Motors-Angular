import { Component } from '@angular/core';
import { Veiculo } from '../../models/veiculo';
import { FuncionariosService } from '../../services/funcionarios.service';
import { VeiculoService } from '../../services/veiculo.service';

@Component({
  selector: 'app-veiculos',
  imports: [],
  templateUrl: './veiculos.component.html',
  styleUrl: './veiculos.component.css'
})
export class VeiculosComponent {

  estiloLinhas: boolean = true //Verifica se o estilo escolhido é de linhas (true) ou colunas (false)
  constructor(
    private serviceFuncionarios: FuncionariosService,
    private serviceVeiculos: VeiculoService
  ) {
  }
  
  listaVeiculos(){
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
}
