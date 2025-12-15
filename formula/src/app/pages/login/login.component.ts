import { Component } from '@angular/core';
import { Funcionario } from '../../models/funcionario';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-login',
  imports: [ MatInputModule, MatIconModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  verSenha: boolean = true

  setVerSenha(){
    this.verSenha = !this.verSenha
  }
}
