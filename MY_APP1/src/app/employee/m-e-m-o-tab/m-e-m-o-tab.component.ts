import{Component,OnInit} from "@angular/core";
import {FormBuilder, FormGroup, FormArray, FormControl, Validators,FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EmployeeService} from "../service/employee.service";
import {FormEntry} from "../modals/formEntry";
import {Router} from '@angular/router';
import {registerComponent} from "../../app-component-registry";
@registerComponent
@Component({
	selector:"app-m-e-m-o-tab",
	templateUrl:"./m-e-m-o-tab.component.html",
	styleUrls:["./m-e-m-o-tab.component.css"]
})
export class MEMOTabComponent implements OnInit{

	onsubmitClicked($node,form){
		console.log('Submit Button Clicked.');
		this.formFieldsData = new FormEntry(this.MEMOTabForm.value);
		this.employeeService.postseSearch1Data(this.formFieldsData,'http://localhost:8081/createEmployee').subscribe(data => {
			form.reset();
			alert("Form Submitted Successfully.");
		});
		return true;
	}


	MEMOTabForm: FormGroup;
	onSubmit(form) {
		
	}


	private formFieldsData: FormEntry = new FormEntry();
	private allDataObj:FormEntry = new FormEntry();
	constructor(private employeeService : EmployeeService,private formBuilder: FormBuilder,private router: Router) { 

	this.MEMOTabForm = this.formBuilder.group({ 
		seEmpId: new FormControl(''),
	 });

	}
	ngOnInit(): void {
	this.MEMOTabForm.valueChanges.subscribe(form => {
		sessionStorage.setItem("MEMOTabComponentForm", JSON.stringify(form));
	});
	}
}