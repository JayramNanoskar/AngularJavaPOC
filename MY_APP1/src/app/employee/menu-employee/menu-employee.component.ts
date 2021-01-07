import{Component,OnInit} from "@angular/core";
import {FormBuilder, FormGroup, FormArray, FormControl, Validators,FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EmployeeService} from "../service/employee.service";
import {FormEntry} from "../modals/formEntry";
import {Router} from '@angular/router';
import {registerComponent} from "../../app-component-registry";
@registerComponent
@Component({
	selector:"app-menu-employee",
	templateUrl:"./menu-employee.component.html",
	styleUrls:["./menu-employee.component.css"]
})
export class MenuEmployeeComponent implements OnInit{

	mMenuListListData= this.getmMenuListListData();
	ismMenuListDataLoaded = false;
	getmMenuListListData(){
		return this.employeeService.getmMenuListListData().subscribe(
			response =>this.handleResponsemMenuListData(response)
		);
	}
	handleResponsemMenuListData(response){
		this.mMenuListListData=response;
			this.ismMenuListDataLoaded = true;
	}
	mMenuListClickHandler($node){
		console.log('Link Clicked.');
	this.router.navigateByUrl($node);
	}


	MenuEmployeeForm: FormGroup;
	onSubmit(form) {
		
	}


	private formFieldsData: FormEntry = new FormEntry();
	private allDataObj:FormEntry = new FormEntry();
	constructor(private employeeService : EmployeeService,private formBuilder: FormBuilder,private router: Router) { 

	this.MenuEmployeeForm = this.formBuilder.group({ 
	 });

	}
	ngOnInit(): void {
	this.MenuEmployeeForm.valueChanges.subscribe(form => {
		sessionStorage.setItem("MenuEmployeeComponentForm", JSON.stringify(form));
	});
	}
}