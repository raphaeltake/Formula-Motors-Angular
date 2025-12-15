import { Injectable } from '@angular/core';
import { Veiculo } from '../models/veiculo';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  static REPO_VEICULOS = "_VEICULOS"

  constructor() { }

  adicionar(veiculo: Veiculo){
    const storage = this.obterStorageVeiculos()
    storage.push(veiculo)
    localStorage.setItem(VeiculoService.REPO_VEICULOS, JSON.stringify(veiculo))
  }


  private obterStorageVeiculos() : Veiculo[]{
    const repositorioVeiculos = localStorage.getItem(VeiculoService.REPO_VEICULOS)

    if(repositorioVeiculos){
      const veiculos: Veiculo[] = JSON.parse(repositorioVeiculos)
      return veiculos
    }
    const veiculos: Veiculo[] = []
    localStorage.setItem(VeiculoService.REPO_VEICULOS, JSON.stringify(veiculos))
    return veiculos
  }

}
