import { Component } from '@angular/core'
import { MatToolbarModule } from '@angular/material/toolbar'
import { RouterLink } from "@angular/router";
import { MatIconModule } from '@angular/material/icon';
import { FuncionariosService } from '../../services/funcionarios.service';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, RouterLink, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  modal: boolean = false;

  constructor(private service: FuncionariosService) { }

  statusLogado() {
    return this.service.statusLogado()
  }

  setLogado() {
    this.service.setLogado();
    this.statusLogado()
  }

  statusGerenciarFuncionarios() {
    return this.service.statusGerenciarFuncionarios()
  }

  setModal() {
    this.modal = !this.modal;
  }
}