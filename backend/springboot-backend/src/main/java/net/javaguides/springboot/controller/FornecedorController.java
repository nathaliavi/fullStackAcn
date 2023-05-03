package net.javaguides.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Empresa;
import net.javaguides.springboot.model.Fornecedor;
import net.javaguides.springboot.repository.EmpresaRepository;
import net.javaguides.springboot.repository.FornecedorRepository;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin("*")
public class FornecedorController {

	@Autowired
	private FornecedorRepository fornecedorRepository;
	
	public FornecedorController(FornecedorRepository fornecedorRepository, EmpresaRepository empresaRepository) {
		this.fornecedorRepository = fornecedorRepository;
	}
	
	@PostMapping("/fornecedores")
	public ResponseEntity<Fornecedor> addFornecedor(@RequestBody Fornecedor fornecedor) {
		Fornecedor _fornecedor = fornecedorRepository.save(fornecedor);
		return new ResponseEntity<>(_fornecedor, HttpStatus.CREATED);
	}
	
	
	//get all
	@GetMapping("/fornecedores")
	public List<Fornecedor> getAllFornecedor(){
		return fornecedorRepository.findAll();
	}
	
	//get by id
	@GetMapping("/fornecedores/{id}")
	public ResponseEntity<Fornecedor> getFornecedorById(@PathVariable Long id) {
		Fornecedor fornecedor = fornecedorRepository
				.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Esse fornecedor não existe"));
		return ResponseEntity.ok(fornecedor);
	}
	
	//delete
	@DeleteMapping("/fornecedores/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteFornecedor(@PathVariable Long id){
		Fornecedor empresa = fornecedorRepository
				.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Esse fornecedor não existe"));
		
		fornecedorRepository.delete(empresa);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);	
	}
	
	//update 
	@PutMapping("/fornecedores/{id}")
	public ResponseEntity<Fornecedor> editEmpresa(@PathVariable Long id, @RequestBody Fornecedor fornecedorDetails){
		Fornecedor fornecedor = fornecedorRepository
				.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Esse fornecedor não existe"));
		
		fornecedor.setCep(fornecedorDetails.getCep());
		fornecedor.setCnpjCpf(fornecedorDetails.getCnpjCpf());
		fornecedor.setName(fornecedorDetails.getName());
		fornecedor.setEmail(fornecedorDetails.getEmail());
		fornecedor.setEmpresas(fornecedorDetails.getEmpresas());
		
		Fornecedor fornecedorEdited = fornecedorRepository.save(fornecedor);
		return ResponseEntity.ok(fornecedorEdited);
	}
	
}
