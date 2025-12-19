import { v4 as uuid } from "uuid"

export class Veiculo {
  id: string = ""
  modelo: string = ""
  marca: string = ""
  categoria: string = ""
  ano: string = ""
  cor: string = ""
  valor: string = ""
  motor: string = ""
  qtde_pesssoas: number = 0
  caminho_imagem: string
  status: boolean

  constructor(id: string, modelo: string, marca: string, categoria: string, ano: string, cor: string, valor: string, motor: string, qtde_pessoas: number, caminho_imagem: string, status: boolean) {
    this.id = id
    this.modelo = modelo
    this.marca = marca
    this.categoria = categoria
    this.ano = ano
    this.cor = cor
    this.valor = valor
    this.motor = motor
    this.qtde_pesssoas = qtde_pessoas
    this.caminho_imagem = caminho_imagem
    this.status = status //Remover, todos os veículos adicionados terão status = true
  }

  static newVeiculo() {
    // const veiculo = new Veiculo()
    // veiculo.id = uuid()
    // return veiculo
  }
}