import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empresa } from 'src/app/Model/Empresa';
import { EmpresaService } from 'src/app/Service/empresa.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit{
  empresas: Empresa[] = [{name: '', cnpj: '', cep: '', id: 0}];

  constructor(private service: EmpresaService, private router: Router){}

  ngOnInit(): void{
    this.getEmpresas();
  }

  private getEmpresas(){
    this.service.getEmpresaList().subscribe(data => {
      this.empresas = data 
    })
  }

  editEmpresa(id: number){
    this.router.navigate(['empresa/edit', id])
  }

  deleteEmpresa(id: number){
    const confirm = window.confirm('Tem certeza de que deseja deletar essa empresa?')
    if(confirm) {
      this.service.deleteEmpresa(id).subscribe(data => {
        this.getEmpresas()
      })
    }
  }

  detailsEmpresa(id: number){
    this.router.navigate(['empresa/details', id])  
  }


}
