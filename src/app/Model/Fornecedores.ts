
import { Empresa } from 'src/app/Model/Empresa';

export class Fornecedores{
    id: number = 0;
    cnpjCpf: String = ''; 
    name: String = '';
    email: String = '';
    cep: String = ''; 
    empresas: Empresa[] = [] ;
}