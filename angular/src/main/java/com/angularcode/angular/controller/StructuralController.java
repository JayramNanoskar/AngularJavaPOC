package com.angularcode.angular.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.angularcode.angular.model.APIResponse;
import com.angularcode.angular.model.Country;
import com.angularcode.angular.model.EmpDetails;
import com.angularcode.angular.model.FileStructure;
import com.angularcode.angular.model.InvestigationDTO;
import com.angularcode.angular.service.FileViewerService;
import com.angularcode.angular.serviceImpl.FileViewerServiceImpl;

@RestController
public class StructuralController {
	
	@Autowired
	FileViewerService service;

	@CrossOrigin("*")
	@GetMapping(value = "/getDirectoryStructures")
	public ResponseEntity<?> receiveDirectoryStructures(@RequestParam("absolutePath") String absPath) {
		FileStructure filesStructure = service.getFileStructure("E:\\temp");
		List<FileStructure> list = new ArrayList<>();
		list.add(filesStructure);
		return new ResponseEntity<List<FileStructure>>(list,HttpStatus.OK);
	}
	
	
	
	@CrossOrigin("*")
	@PostMapping(value = "/createInvestigation")
	public APIResponse createInvestigation(@RequestBody InvestigationDTO investigationDTO){
		System.out.println("Entering create Investigation()...");
		System.out.println(investigationDTO);
        return new APIResponse(HttpStatus.OK.value(), "User saved successfully.","created Successfully");
    }
	
	
	
	@CrossOrigin("*")
	@GetMapping(value = "/getInvestigation")
	public ResponseEntity<?> getInvestigation(){
		InvestigationDTO dto = new InvestigationDTO();
		return new ResponseEntity<InvestigationDTO>(dto,HttpStatus.OK);
    }
	
	@CrossOrigin("*")
	@GetMapping(value = "/ResourceTrack/getCountries")
	public Object getCountries(){
		return FileViewerServiceImpl.getAllCountries();
    }
	
	@CrossOrigin("*")
	@GetMapping(value = "/ResourceTrack/getEmpRoles")
	public Object getEmpRoles(){
		return FileViewerServiceImpl.getEmpRoles();
    }
	
	@CrossOrigin("*")
	@GetMapping(value = "/ResourceTrack/getEmployeesHeader")
	public Object getEmpHeader(){
		return FileViewerServiceImpl.getEmployeesHeader();
    }
	
	@CrossOrigin("*")
	@GetMapping(value = "/ResourceTrack/getEmployees")
	public Object getEmpData(){
		return FileViewerServiceImpl.getEmployees();
    }
	
	@CrossOrigin("*")
	@GetMapping(value = "/ResourceTrack/getMenuList")
	public Object getMenuList(){
		return FileViewerServiceImpl.getAllMenus();
    }

	@CrossOrigin("*")
	@GetMapping(value = "/ResourceTrack/getMainTabList")
	public Object getMainTabList(){
		return FileViewerServiceImpl.getMainTabList();
    }
	
	@CrossOrigin("*")
	@PostMapping(value = "/submitAllTabData")
	public APIResponse submitAllTabData(@RequestBody EmpDetails detailsDTO){
		System.out.println("Entering submitAllTabData()...");
		System.out.println(detailsDTO);
        return new APIResponse(HttpStatus.OK.value(), "User saved successfully.","created Successfully");
    }
	
	@CrossOrigin("*")
	@PostMapping(value = "/createEmployee")
	public APIResponse createEmployee(@RequestBody EmpDetails detailsDTO){
		System.out.println("Entering create createEmployee()...");
		System.out.println(detailsDTO);
        return new APIResponse(HttpStatus.OK.value(), "User saved successfully.","created Successfully");
    }

}
