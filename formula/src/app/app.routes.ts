import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VeiculosComponent } from './pages/veiculos/veiculos.component';
import { FuncionariosComponent } from './pages/funcionarios/funcionarios.component';
import { CadastrarVeiculosComponent } from './pages/cadastrar-veiculos/cadastrar-veiculos.component';
import { CadastrarFuncionariosComponent } from './pages/cadastrar-funcionarios/cadastrar-funcionarios.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  { path: "veiculos", component: VeiculosComponent },
  { path: "funcionarios", component: FuncionariosComponent},
  { path: "cadastrar_veiculo", component: CadastrarVeiculosComponent },
  { path: "cadastrar_funcionario", component: CadastrarFuncionariosComponent },
  { path: "login", component: LoginComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
