package net.javaguides.springboot.controller;

import java.util.List;
import java.util.HashMap;
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


import net.javaguides.springboot.repository.EmpresaRepository;
import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Empresa;
import net.javaguides.springboot.model.Fornecedor;



@RestController
@RequestMapping("/api/v1/")
@CrossOrigin("*")
public class EmpresaController {
	
	@Autowired
	private EmpresaRepository empresaRepository;
	
	//get all 
	@GetMapping("/empresas")
	public List<Empresa> getAllEmpresas(){
		return empresaRepository.findAll();
	}
	
	//get by id
	@GetMapping("/empresas/{id}")
	public ResponseEntity<Empresa> getEmpresaById(@PathVariable Long id) {
		Empresa empresa = empresaRepository
				.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Essa empresa não existe"));
		return ResponseEntity.ok(empresa);
	}
	
	//create new 
	/*@PostMapping("/empresas")
	public Empresa addEmpresa(@RequestBody Empresa empresa) throws Exception {
		/*URL urlCEP = new URL("http://cep.la/" + empresa.getCep());
		URLConnection connection = urlCEP.openConnection();
		InputStream is = connection.getInputStream();
		BufferedReader br = new BufferedReader(new InputStreamReader(is, "UTF-8"));
		
		String cepApi = "";
		StringBuilder jsonCep = new StringBuilder();
		System.out.println(br);
		while((cepApi = br.readLine()) != null) {
			jsonCep.append(cepApi);
		}
		
		System.out.println(jsonCep.toString());
	    
	    String json2 = br.lines().collect(Collectors.joining());
	    String json3 = gson.toJson(json2);
		Empresa empresaAux = new Gson().fromJson(jsonCep.toString(), Empresa.class);
		//System.out.println(empresaAux.getCep());
		
		return empresaRepository.save(empresa);
	}
	*/
	
	@PostMapping("/empresas")
	public ResponseEntity<Empresa> addEmpresa(@RequestBody Empresa empresa) {
		Empresa _empresas = empresaRepository.save(empresa);
		return new ResponseEntity<>(_empresas, HttpStatus.CREATED);
	}

	//update 
	@PutMapping("/empresas/{id}")
	public ResponseEntity<Empresa> editEmpresa(@PathVariable Long id, @RequestBody Empresa empresaDetails){
		Empresa empresa = empresaRepository
				.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Essa empresa não existe"));
		
		empresa.setCep(empresaDetails.getCep());
		empresa.setCnpj(empresaDetails.getCnpj());
		empresa.setName(empresaDetails.getName());
		
		Empresa empresaEdited = empresaRepository.save(empresa);
		return ResponseEntity.ok(empresaEdited);
	}
	
	//delete
	@DeleteMapping("/empresas/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmpresa(@PathVariable Long id){
		Empresa empresa = empresaRepository
				.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Essa empresa não existe"));
		
		empresaRepository.delete(empresa);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);	
	}
	
}
