import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empresa } from 'src/app/Model/Empresa';
import { EmpresaService } from 'src/app/Service/empresa.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

  empresa: Empresa = new Empresa()
  id: number = 0

  constructor(
    private empresaService: EmpresaService, 
    private router: Router,
    private route: ActivatedRoute){}

  ngOnInit(): void{
    this.id = this.route.snapshot.params['id']
    this.empresaService.getEmpresaById(this.id).subscribe( data => {
      this.empresa = data;
    })
  }

  editEmpresa(){
    this.empresaService.updateEmpresa(this.id, this.empresa).subscribe(
      {
        next: data => {
          console.log(data) 
          this.goToListEmpresa()
        },       
        error: error => console.log(error)
    })
  }

  goToListEmpresa(){
    this.router.navigate(['empresa'])
  }

  onSubmit(){
    this.editEmpresa()
  }  

}
