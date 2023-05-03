import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.scss']
})

export class ModalDeleteComponent {
  mostrar: boolean = false;

  toggle () {
    this.mostrar = !this.mostrar;
    alert("mostrar")
  }
}
