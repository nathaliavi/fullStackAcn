import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Fornecedores } from '../Model/Fornecedores';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FornecedorService {
  private baseUrl = "http://localhost:8080/api/v1/fornecedores";


  constructor(private httpClient:HttpClient) { }

  getFornecedorList(): Observable<Fornecedores[]>{
    return this.httpClient.get<Fornecedores[]>(`${this.baseUrl}`)
  }

  addFornecedor(fornecedor: Fornecedores): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`, fornecedor)
  }

  getFornecedorById(id: number): Observable<Fornecedores>{
    return this.httpClient.get<Fornecedores>(`${this.baseUrl}/${id}`)
  }

  updateFornecedor(id: number, fornecedor: Fornecedores): Observable<Object>{
    console.log("fornecedor",fornecedor)
    return this.httpClient.put(`${this.baseUrl}/${id}`, fornecedor)
  }

  deleteFornecedor(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/ ${id}`)
  }


}
