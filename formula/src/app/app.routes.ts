import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { CadastrarVeiculosComponent } from './cadastrar-veiculos/cadastrar-veiculos.component';
import { CadastrarFuncionariosComponent } from './cadastrar-funcionarios/cadastrar-funcionarios.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  { path: "veiculos", component: VeiculosComponent },
  { path: "funcionarios", component: FuncionariosComponent },
  { path: "cadastrar_veiculo", component: CadastrarVeiculosComponent },
  { path: "cadastrar_funcionario", component: CadastrarFuncionariosComponent },
  { path: "login", component: LoginComponent },
];
