import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Empresa } from 'src/app/Model/Empresa';
import { EmpresaService } from 'src/app/Service/empresa.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit{
  id: number = 0
  empresa: Empresa = new Empresa()

  constructor(private route: ActivatedRoute, private empresaService: EmpresaService){}

  ngOnInit(){
    this.id = this.route.snapshot.params['id']
    this.empresaService.getEmpresaById(this.id).subscribe(data => {
      this.empresa = data
    })
  }

}
