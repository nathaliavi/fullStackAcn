import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fornecedores } from 'src/app/Model/Fornecedores';
import { FornecedorService } from 'src/app/Service/fornecedor.service';

@Component({
  selector: 'app-list-for',
  templateUrl: './list-for.component.html',
  styleUrls: ['./list-for.component.scss']
})


export class ListForComponent {
  fornecedores: Fornecedores[] = [{name: '', cnpjCpf: '', email:'', cep: '', id: 0, empresas: []}];

  constructor(private service: FornecedorService, private router: Router){}

  ngOnInit(): void{
    this.getFornecedors();
  }

  private getFornecedors(){
    this.service.getFornecedorList().subscribe(data => {
      this.fornecedores = data 
    })
  }

  editFornecedor(id: number){
    this.router.navigate(['fornecedor/edit', id])
  }

  deleteFornecedor(id: number){
    const confirm = window.confirm('Tem certeza de que deseja deletar esse fornecedor?')
    if(confirm) {
      this.service.deleteFornecedor(id).subscribe(data => {
        this.getFornecedors()
      })
    }
  }

  detailsFornecedor(id: number){
    this.router.navigate(['fornecedor/details', id])  
  }
}
