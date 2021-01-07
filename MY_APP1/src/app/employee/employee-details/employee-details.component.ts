import{Component,OnInit} from "@angular/core";
import {FormBuilder, FormGroup, FormArray, FormControl, Validators,FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EmployeeService} from "../service/employee.service";
import {FormEntry} from "../modals/formEntry";
import {Router} from '@angular/router';
import {registerComponent} from "../../app-component-registry";
@registerComponent
@Component({
	selector:"app-employee-details",
	templateUrl:"./employee-details.component.html",
	styleUrls:["./employee-details.component.css"]
})
export class EmployeeDetailsComponent implements OnInit{

	edSearchTableColumnHeader = this.getedSearchTableColumnHeader();
	edSearchTableTableData = this.getedSearchTableTableData();
	isedSearchTableDataLoaded = false;
	getedSearchTableColumnHeader(){
		return this.employeeService.getedSearchTableColumnHeader().subscribe(
			response =>this.handleSuccessfulResponseedSearchTableHeader(response)
		);
	}
	handleSuccessfulResponseedSearchTableHeader(response){
		this.edSearchTableColumnHeader=response;
	}
	getedSearchTableTableData(){
		return this.employeeService.getedSearchTableTableData().subscribe(
			response =>this.handleSuccessfulResponseedSearchTableData(response)
		);
	}
	handleSuccessfulResponseedSearchTableData(response){
		this.edSearchTableTableData=response;
			this.isedSearchTableDataLoaded = true;
	}
	onedSearchTableRowClicked($node){
		console.log('Row Clicked.')
	}
	onedSearchTableDeleteClicked($node){
		console.log('Delete Clicked.')
	}
	onedSearchTableSortClicked($node){
		console.log('Sort Clicked.')
	}


	EmployeeDetailsForm: FormGroup;
	onSubmit(form) {
		
	}


	private formFieldsData: FormEntry = new FormEntry();
	private allDataObj:FormEntry = new FormEntry();
	constructor(private employeeService : EmployeeService,private formBuilder: FormBuilder,private router: Router) { 

	this.EmployeeDetailsForm = this.formBuilder.group({ 
	 });

	}
	ngOnInit(): void {
	this.EmployeeDetailsForm.valueChanges.subscribe(form => {
		sessionStorage.setItem("EmployeeDetailsComponentForm", JSON.stringify(form));
	});
	}
}