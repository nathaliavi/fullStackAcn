import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './empresa/list/list.component';
import { EditComponent } from './empresa/edit/edit.component';
import { AddComponent } from './empresa/add/add.component';
import { AddForComponent } from './fornecedor/add-for/add-for.component';
import { ListForComponent } from './fornecedor/list-for/list-for.component';
import { EditForComponent } from './fornecedor/edit-for/edit-for.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsForComponent } from './fornecedor/details-for/details-for.component';
import { DetailsComponent } from './empresa/details/details.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ModalDeleteComponent } from './shared/modal-delete/modal-delete.component';


@NgModule({
  declarations: [
    HomeComponent,
    ListComponent,
    EditComponent,
    AddComponent,
    AddForComponent,
    ListForComponent,
    EditForComponent,
    DetailsForComponent,
    DetailsComponent,
    HeaderComponent,
    FooterComponent,
    ModalDeleteComponent
  ],
  imports: [
    CommonModule,
    CrudRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class CrudModule { }
