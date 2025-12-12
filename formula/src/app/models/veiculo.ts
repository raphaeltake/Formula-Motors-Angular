import { v4 as uuid } from "uuid"

export class Veiculo {
  id: string = ""
  modelo: string = ""
  marca: string = ""
  categoria: string = ""
  ano: string = ""
  cor: string = ""
  valor: number = 0
  motor: string = ""
  caminho_imagem?: string

  static newVeiculo() {
    const veiculo = new Veiculo()
    veiculo.id = uuid()
    return veiculo
  }
}