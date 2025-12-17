import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {
  private gerenciarFuncionarios: boolean = true
  private logado: boolean = true
  constructor() {
  }

  setLogado() { //Altera entre logado como funcionário ou apenas como visitante
    this.logado = !this.logado
  }

  statusLogado(){ //Verifica se o usuário está logado como funcionário
    return this.logado
  }

  statusGerenciarFuncionarios(){ //Verifica se o usuário tem poder para manter outros funcionários
    return this.gerenciarFuncionarios
  }
}
