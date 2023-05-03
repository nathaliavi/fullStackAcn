package net.javaguides.springboot.model;


import java.util.Set;
import java.util.HashSet;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
import java.util.ArrayList;

@Entity
@Table(name = "Empresas")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Empresa {
	
	@Id
	@Column(name = "empresa_id")
	@GeneratedValue
	//(strategy = GenerationType.IDENTITY)
	private long id;
	
	@ManyToMany(mappedBy = "empresas", fetch = FetchType.LAZY)
	@JsonBackReference 
	//@JsonIdentityReference(alwaysAsId = true)
	private Set<Fornecedor> fornecedores = new HashSet<>();
	
	@Column(name = "cnpj")
	private String cnpj;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "cep")
	private String cep;
	
	
	public Empresa() {
		
	}

	public Empresa(long id, Set<Fornecedor> fornecedores, String cnpj, String name, String cep) {
		super();
		this.fornecedores = fornecedores;
		this.cnpj = cnpj;
		this.name = name;
		this.cep = cep;
	}
	
	public Set<Fornecedor> getFornecedores() {
		return fornecedores;
	}
	

	 public void setTutorials(Set<Fornecedor> fornecedores) {
	    this.fornecedores = fornecedores;
	  }  


	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getCnpj() {
		return cnpj;
	}
	public void setCnpj(String cnpj) {
		this.cnpj = cnpj;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCep() {
		return cep;
	}
	public void setCep(String cep) {
		this.cep = cep;
	}
	
	
}
