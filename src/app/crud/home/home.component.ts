import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  constructor(private router: Router){}

  listEmp(){
    this.router.navigate(['empresa'])
  }

  listFor(){
    this.router.navigate(['fornecedor'])
  }

}
