import { Component } from '@angular/core';
import { Funcionario } from '../../models/funcionario';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ MatInputModule, MatIconModule, FormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  id?: string
  senha?: string
  verSenha: boolean = true

  setVerSenha(){
    this.verSenha = !this.verSenha
  }

  verificarLogin(){
    
  }
}
