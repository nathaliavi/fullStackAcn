import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fornecedores } from 'src/app/Model/Fornecedores';
import { FornecedorService } from 'src/app/Service/fornecedor.service';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-edit-for',
  templateUrl: './edit-for.component.html',
  styleUrls: ['./edit-for.component.scss']
})


export class EditForComponent {

  fornecedor: Fornecedores = new Fornecedores()
  id: number = 0
  empresasFormGroup = new FormGroup({});
  
  constructor(
    private fornecedorService: FornecedorService, 
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder){}

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

    ngOnInit(): void{

    this.id = this.route.snapshot.params['id']

    this.fornecedorService.getFornecedorById(this.id).subscribe( data => {
      console.log(data)
      this.fornecedor = data;
      const empresasArray = data.empresas
      this.createFornecedor.patchValue({
        cnpjCpf: data.cnpjCpf,
        name: data.name,
        email: data.email,
        cep: data.cep,
        empresas: data.empresas
      });

    })
  }

  editFornecedor(){
    this.fornecedorService.updateFornecedor(this.id, this.fornecedor).subscribe(
      {
        next: data => {
          this.goToListFornecedor()
        },       
        error: error => console.log(error)
    })
  }

  goToListFornecedor(){
    this.router.navigate(['fornecedor'])
  }

  onSubmit(){
    this.fornecedor = this.createFornecedor.value
    this.editFornecedor()
  }  


  newEmpresas() : FormGroup {
    return this.formBuilder.group({
      cnpj:['', Validators.required], 
      name: ['', Validators.required],
      cep: ['', Validators.required],
      id: ['']
    });
    //this.fornecedores.push(fornecedoresForm);
  }

  
  addEmpresas(){
    this.empresasArray.push(this.newEmpresas())
  }

  removeEmpresas(i:number) {
    this.empresasArray.removeAt(i);
  }



}
