import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './empresa/list/list.component';
import { AddComponent } from './empresa/add/add.component';
import { EditComponent } from './empresa/edit/edit.component';
import { ListForComponent } from './fornecedor/list-for/list-for.component';
import { AddForComponent } from './fornecedor/add-for/add-for.component';
import { EditForComponent } from './fornecedor/edit-for/edit-for.component';
import { DetailsComponent } from './empresa/details/details.component';
import { DetailsForComponent } from './fornecedor/details-for/details-for.component';

const routes: Routes = [{
  path: '', 
  redirectTo: 'main', 
  pathMatch: 'full'
}, 
  { path: 'main', component: HomeComponent}, 
  
  { path: 'empresa', component: ListComponent},
  { path: 'empresa/add', component: AddComponent}, 
  { path: 'empresa/edit/:id', component: EditComponent},
  { path: 'empresa/details/:id', component: DetailsComponent},
   
  { path: 'fornecedor', component: ListForComponent},
  { path: 'fornecedor/add', component: AddForComponent}, 
  { path: 'fornecedor/edit/:id', component: EditForComponent},
  { path: 'fornecedor/details/:id', component: DetailsForComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
