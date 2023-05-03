import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Fornecedores } from 'src/app/Model/Fornecedores';
import { FornecedorService } from 'src/app/Service/fornecedor.service';

@Component({
  selector: 'app-add-for',
  templateUrl: './add-for.component.html',
  styleUrls: ['./add-for.component.scss']
})


export class AddForComponent {
  fornecedoresAux:Array<Fornecedores> = []
  fornecedor: Fornecedores = new Fornecedores()

  constructor(
    private fornecedorService: FornecedorService, 
    private router: Router, 
    private formBuilder: FormBuilder, 
  ){}

  public createFornecedor: FormGroup = this.formBuilder.group({
    cnpjCpf: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    cep: ['', [Validators.required, Validators.pattern(/^[0-9]*$/), Validators.minLength(8), Validators.maxLength(8)]],
    empresas: this.formBuilder.array([this.newEmpresas()])
  })

  get empresasArray() {
    return <FormArray>this.createFornecedor.get("empresas");
  }

  newEmpresas() : FormGroup {
    return this.formBuilder.group({
      cnpj:['', Validators.required], 
      name: ['', Validators.required],
      cep: ['', Validators.required]
    });
    //this.fornecedores.push(fornecedoresForm);
  }

  addEmpresas(){
    this.empresasArray.push(this.newEmpresas())
  }

  removeEmpresas(i:number) {
    this.empresasArray.removeAt(i);
  }

  saveFornecedor(){
    this.fornecedorService.addFornecedor(this.fornecedor).subscribe(
      data => {
        console.log(data)
        this.goToListFornecedor() 
      }
    )
  }

  goToListFornecedor(){
    this.router.navigate(['fornecedor'])
  }

  onSubmit(){
    this.fornecedor = this.createFornecedor.value
    this.saveFornecedor()
  }  

}
