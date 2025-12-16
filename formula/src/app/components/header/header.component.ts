import { Component } from '@angular/core'
import { MatToolbarModule } from '@angular/material/toolbar'
import { RouterLink } from "@angular/router";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, RouterLink, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  gerenciarFuncionarios: boolean = true
  logado: boolean = true
  modal: boolean = false

  setLogado(){ //apenas para testes
    this.logado = !this.logado
  }

  setModal(){
    this.modal = !this.modal
  }
}