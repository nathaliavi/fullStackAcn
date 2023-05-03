package net.javaguides.springboot.model;

import java.util.Set;
import java.util.List;
import java.util.ArrayList;

import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
//import jakarta.persistence.Table;
import jakarta.persistence.*;
import java.util.HashSet;

@Entity
@Table(name = "Fornecedores")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Fornecedor {
	

	@Id
	@Column(name = "fornecedor_id")
	@GeneratedValue
	//(strategy = GenerationType.IDENTITY)
	private long id;
	
	@ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinTable(name="Empresa_Fornecedor",
		joinColumns = {
				@JoinColumn(name = "fornecedor_id")
		}, //, referencedColumnName = "id"
	    inverseJoinColumns = {
	    		@JoinColumn(name="empresa_id")
	    } //, referencedColumnName = "id"
	)

	//@JsonManagedReference
	private Set<Empresa> empresas = new HashSet<Empresa>();
	//@JsonIdentityReference(alwaysAsId = true)
	//private List<Empresa> empresas = new ArrayList<Empresa>();
	
	@Column(name = "cnpjCpf")
	private String cnpjCpf;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "email")
	private String email;
	
	@Column(name = "cep")
	private String cep;
	
	public Fornecedor() {
		
	}

	public Fornecedor(long id, String cnpjCpf, String name, String email, String cep,  Set < Empresa > empresas) {
		super();
		this.cnpjCpf = cnpjCpf;
		this.name = name;
		this.email = email;
		this.cep = cep;
		this.empresas = empresas;
	}
	
	/*public void addEmpresa(Empresa empresa) {
		 this.empresas.add(empresa);
		 empresa.getFornecedores().add(this);
	}
		  
	public void removeEmpresa(long empresaId) {
		Empresa empresa = this.empresas.stream().filter(e -> e.getId() == empresaId).findFirst().orElse(null);
		if (empresa != null) {
			this.empresas.remove(empresa);
			empresa.getFornecedores().remove(this);
		}
	 }*/
	
	
	
	public long getId() {
		return id;
	}

	public Set<Empresa> getEmpresas() {
		return empresas;
	}

	public void setEmpresas(Set<Empresa> empresas) {
		this.empresas = empresas;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getCnpjCpf() {
		return cnpjCpf;
	}

	public void setCnpjCpf(String cnpjCpf) {
		this.cnpjCpf = cnpjCpf;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getCep() {
		return cep;
	}

	public void setCep(String cep) {
		this.cep = cep;
	}
	
	
	

}
