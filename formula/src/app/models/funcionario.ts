import { v4 as uuid } from "uuid"

export class Funcionario{
  id: string = ""
  nome: string = ""
  cpf: string = ""
  email: string = ""
  endereco: string = ""
  numero: number = 0
  complemento: string = ""

  static newFuncionario(){
    const funcionario = new Funcionario()
    funcionario.id = uuid()
    return funcionario
  }
}