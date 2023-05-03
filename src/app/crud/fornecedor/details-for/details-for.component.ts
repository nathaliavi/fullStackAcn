import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fornecedores } from 'src/app/Model/Fornecedores';
import { FornecedorService } from 'src/app/Service/fornecedor.service';

@Component({
  selector: 'app-details-for',
  templateUrl: './details-for.component.html',
  styleUrls: ['./details-for.component.scss']
})
export class DetailsForComponent implements OnInit{
  id: number = 0
  fornecedor: Fornecedores = new Fornecedores()
  empresas: any = {}  
  empresasArray: any[] = []

  constructor(private route: ActivatedRoute, private fornecedoresService: FornecedorService){}

  ngOnInit(){
    this.id = this.route.snapshot.params['id']
    this.fornecedoresService.getFornecedorById(this.id).subscribe(data => {
      this.fornecedor = data
      this.empresas = data
      this.empresasArray = Object.keys(this.empresas.empresas).map(key => this.empresas.empresas[key]);
      console.log("this.empresasArray", this.empresasArray)
    })
  }

}
