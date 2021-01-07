import{Component,OnInit} from "@angular/core";
import {FormBuilder, FormGroup, FormArray, FormControl, Validators,FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EmployeeService} from "../service/employee.service";
import {FormEntry} from "../modals/formEntry";
import {Router} from '@angular/router';
import {registerComponent} from "../../app-component-registry";
@registerComponent
@Component({
	selector:"app-detail-tab",
	templateUrl:"./detail-tab.component.html",
	styleUrls:["./detail-tab.component.css"]
})
export class DetailTabComponent implements OnInit{

	onsubmitClicked($node,form){
		console.log('Submit Button Clicked.');
		this.formFieldsData = new FormEntry(this.DetailTabForm.value);
		this.employeeService.postcdSearchData(this.formFieldsData,'http://localhost:8081/createEmployee').subscribe(data => {
			form.reset();
			alert("Form Submitted Successfully.");
		});
		return true;
	}


	DetailTabForm: FormGroup;
	onSubmit(form) {
		
	}


	private formFieldsData: FormEntry = new FormEntry();
	private allDataObj:FormEntry = new FormEntry();
	constructor(private employeeService : EmployeeService,private formBuilder: FormBuilder,private router: Router) { 

	this.DetailTabForm = this.formBuilder.group({ 
		seEmpId: new FormControl(''),
	 });

	}
	ngOnInit(): void {
	this.DetailTabForm.valueChanges.subscribe(form => {
		sessionStorage.setItem("DetailTabComponentForm", JSON.stringify(form));
	});
	}
}