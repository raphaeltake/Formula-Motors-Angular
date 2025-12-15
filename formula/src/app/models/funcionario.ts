import { nanoid } from 'nanoid'

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
    funcionario.id = nanoid(5)
    return funcionario
  }
}