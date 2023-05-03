import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Empresa } from '../Model/Empresa';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private baseUrl = "http://localhost:8080/api/v1/empresas";
  private urlCEP = "http://cep.la";

  constructor(private httpClient:HttpClient) { }

  getEmpresaList(): Observable<Empresa[]>{
    return this.httpClient.get<Empresa[]>(`${this.baseUrl}`)
  }

  addEmpresa(empresa: Empresa): Observable<Object>{
    console.log("empresa service", empresa)
    return this.httpClient.post(`${this.baseUrl}`, empresa)
  }

  getEmpresaById(id: number): Observable<Empresa>{
    return this.httpClient.get<Empresa>(`${this.baseUrl}/${id}`)
  }

  updateEmpresa(id: number, empresa: Empresa): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`, empresa)
  }

  deleteEmpresa(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/ ${id}`)
  }

  validateCEP(cep: String): Observable<Object>{
    return this.httpClient.get(`${this.urlCEP}/${cep}`)
  }



}
