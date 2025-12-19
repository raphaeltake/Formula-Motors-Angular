import { Injectable } from '@angular/core';
import { Veiculo } from '../models/veiculo';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  static REPO_VEICULOS = "_VEICULOS"

  veiculos: Veiculo[] = [new Veiculo("11111f", "Kombi", "VW", "Van", "1999", "Branca", "10.000", "1.0", 10, "/assets/imgVeiculos/vw-kombi.webp", true), new Veiculo("2222f", "Fox", "VW", "Hatch", "2016", "Vermelho", "20.000", "1.0", 5, "/assets/imgVeiculos/vw-fox.webp", false)] //Veículos teste

  constructor() { }

  setAnuncioStatus(veiculo: Veiculo) {
    veiculo.status = !veiculo.status
  }

  statusAnuncio(veiculo: Veiculo) {
    return veiculo.status
  }

  excluirAnuncio(id: string) {
    this.veiculos = this.veiculos.filter(v => v.id !== id);
  }

  adicionar(veiculo: Veiculo) {
    const storage = this.obterStorageVeiculos()
    storage.push(veiculo)
    localStorage.setItem(VeiculoService.REPO_VEICULOS, JSON.stringify(veiculo))
  }

  private obterStorageVeiculos(): Veiculo[] {
    const repositorioVeiculos = localStorage.getItem(VeiculoService.REPO_VEICULOS)

    if (repositorioVeiculos) {
      const veiculos: Veiculo[] = JSON.parse(repositorioVeiculos)
      return veiculos
    }
    const veiculos: Veiculo[] = []
    localStorage.setItem(VeiculoService.REPO_VEICULOS, JSON.stringify(veiculos))
    return veiculos
  }

}
