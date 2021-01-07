import{Component,OnInit} from "@angular/core";
import {FormBuilder, FormGroup, FormArray, FormControl, Validators,FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EmployeeService} from "../service/employee.service";
import {FormEntry} from "../modals/formEntry";
import {Router} from '@angular/router';
import {registerComponent} from "../../app-component-registry";
@registerComponent
@Component({
	selector:"app-create-employee",
	templateUrl:"./create-employee.component.html",
	styleUrls:["./create-employee.component.css"]
})
export class CreateEmployeeComponent implements OnInit{

	onsubmitClicked($node,form){
		console.log('Submit Button Clicked.');
		this.formFieldsData = new FormEntry(this.CreateEmployeeForm.value);
		this.employeeService.postceCreateData(this.formFieldsData,'http://localhost:8081/createEmployee').subscribe(data => {
			form.reset();
			alert("Form Submitted Successfully.");
		});
		return true;
	}


	CreateEmployeeForm: FormGroup;
	onSubmit(form) {
		
	}


	private formFieldsData: FormEntry = new FormEntry();
	private allDataObj:FormEntry = new FormEntry();
	constructor(private employeeService : EmployeeService,private formBuilder: FormBuilder,private router: Router) { 

	this.CreateEmployeeForm = this.formBuilder.group({ 
		cePan: new FormControl(''),
		ceEmailId: new FormControl(''),
	 });

	}
	ngOnInit(): void {
	this.CreateEmployeeForm.valueChanges.subscribe(form => {
		sessionStorage.setItem("CreateEmployeeComponentForm", JSON.stringify(form));
	});
	}
}