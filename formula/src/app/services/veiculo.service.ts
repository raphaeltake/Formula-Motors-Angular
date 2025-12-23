import { Injectable } from '@angular/core';
import { Veiculo } from '../models/veiculo';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  static REPO_VEICULOS = "_VEICULOS"

  // veiculos: Veiculo[] = [new Veiculo("11111f", "Kombi", "VW", "Van", "1999", "Branca", "10.000", "1.0", 10, "/assets/imgVeiculos/vw-kombi.webp", true), new Veiculo("2222f", "Fox", "VW", "Hatch", "2016", "Vermelho", "20.000", "1.0", 5, "/assets/imgVeiculos/vw-fox.webp", false)] //Veículos teste

  constructor() { }

  setAnuncioStatus(veiculo: Veiculo) {
    const storage = this.obterStorageVeiculos()
    const index = storage.findIndex(v => v.id === veiculo.id)
    storage[index].status = !storage[index].status
    localStorage.setItem(VeiculoService.REPO_VEICULOS, JSON.stringify(storage))
  }

  statusAnuncio(veiculo: Veiculo) {
    const storage = this.obterStorageVeiculos()
    const index = storage.findIndex(v => v.id === veiculo.id)
    return storage[index].status
  }

  excluirAnuncio(id: string) {
    let storage = this.obterStorageVeiculos()
    storage = storage.filter(v => v.id !== id);
    localStorage.setItem(VeiculoService.REPO_VEICULOS, JSON.stringify(storage))
  }

  salvarEdicao(veiculo: Veiculo){
    const storage = this.obterStorageVeiculos()
    storage.forEach(v => {
      if(v.id === veiculo.id){
        Object.assign(v, veiculo)
      }
    })
    localStorage.setItem(VeiculoService.REPO_VEICULOS, JSON.stringify(storage))
  }

  adicionar(veiculo: Veiculo) {
    const storage = this.obterStorageVeiculos()
    storage.push(veiculo)
    localStorage.setItem(VeiculoService.REPO_VEICULOS, JSON.stringify(storage))
  }

  listarVeiculos() {
    return this.obterStorageVeiculos()
  }

  private obterStorageVeiculos() : Veiculo[] {
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
