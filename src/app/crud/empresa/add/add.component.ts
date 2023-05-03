import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Empresa } from 'src/app/Model/Empresa';
import { EmpresaService } from 'src/app/Service/empresa.service';

import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Fornecedores } from 'src/app/Model/Fornecedores';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})

export class AddComponent {
  //fornecedores:Array<Fornecedores> = []
  fornecedoresAux:Array<Fornecedores> = []
  empresa: Empresa = new Empresa()

  constructor(
    private empresaService: EmpresaService, 
    private router: Router, 
    private formBuilder: FormBuilder, 
  ){}

  public createEmpresa: FormGroup = this.formBuilder.group({
    cnpj: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
    name: ['', [Validators.required, Validators.minLength(2)]],
    cep: ['', [Validators.required, Validators.pattern(/^[0-9]*$/), Validators.minLength(8), Validators.maxLength(8)]],
    fornecedores: this.formBuilder.array([this.newFornecedores()])
  })

  get fornecedoresArray() {
    return <FormArray>this.createEmpresa.get("fornecedores");
  }

  newFornecedores() : FormGroup {
    return this.formBuilder.group({
      cnpjCpf:['', Validators.required], 
      name: ['', Validators.required],
      email: ['', Validators.required],
      cep: ['', Validators.required]
    });
    //this.fornecedores.push(fornecedoresForm);
  }

  addFornecedores(){
    this.fornecedoresArray.push(this.newFornecedores())
  }

  removeFornecedores(i:number) {
    this.fornecedoresArray.removeAt(i);
  }

  saveEmpresa(){
    this.empresaService.addEmpresa(this.empresa).subscribe(
      data => {
        console.log(data)
        this.goToListEmpresa() 
      }
    )
  }

  goToListEmpresa(){
    this.router.navigate(['empresa'])
  }

  onSubmit(){
    //this.addFornecedores()
    this.empresa = this.createEmpresa.value
    //console.log("this.empresa", this.empresa)
    console.log(this.createEmpresa.value)
    //this.validCEP()
    this.saveEmpresa()
  }  

 /*validCEP(){
    this.empresaService.validateCEP(this.empresa.cep).subscribe(
      data => console.log(data)
    )
  }*/


}
