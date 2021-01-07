import{Component,OnInit} from "@angular/core";
import {Tab} from "../../sharedComponent/tabs/tab.model";
import {FormBuilder, FormGroup, FormArray, FormControl, Validators,FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EmployeeService} from "../service/employee.service";
import {FormEntry} from "../modals/formEntry";
import {Router} from '@angular/router';
import {registerComponent} from "../../app-component-registry";
@registerComponent



@registerComponent@Component({
	selector:"app-inv-tabs",
	templateUrl:"./inv-tabs.component.html",
	styleUrls:["./inv-tabs.component.css"]
})
export class InvTabsComponent implements OnInit{

	tabs1605861680528TabsData= this.gettabs1605861680528TabsData();
	istabs1605861680528TabsDataLoaded = false;
	tabs1605861680528TabsList : Tab[] = [];
	tabs1605861680528NamesList : string[] = [];
	tabs1605861680528SelectedTabNo = 0;
	gettabs1605861680528TabsData(){
		return this.employeeService.gettabs1605861680528TabsData().subscribe(
			response =>this.handleResponsetabs1605861680528TabsData(response)
		);
	}
	handleResponsetabs1605861680528TabsData(response){
		this.tabs1605861680528TabsList = [];
		response.forEach(element => {
			this.tabs1605861680528NamesList.push(element.componentName);
			this.tabs1605861680528TabsList.push(new Tab(element.componentName, element.title, element.tabData));
		});
			this.istabs1605861680528TabsDataLoaded = true;
	}
	ontabs1605861680528TabChanged($node){
		console.log('Tab Clicked event in Parent Component.');
		/*this.router.navigateByUrl($node);*/
	}
	ontabs1605861680528SaveAllClicked($node,form){
		console.log('Submit Parent SubmitvButton Clicked.');
		this.tabs1605861680528NamesList.forEach( (element) => {
			/*Object.defineProperty(this.allDataObj, element, {value : new FormEntry(JSON.parse(sessionStorage.getItem(element+'Form'))),writable: true,	enumerable: true});*/
			this.allDataObj = Object.assign(this.allDataObj, new FormEntry(JSON.parse(sessionStorage.getItem(element+'Form'))));
		});
		this.employeeService.postAlltabs1605861680528Data(this.allDataObj,'http://localhost:8080/submitAllTabData').subscribe(data => {
			form.reset();
		});
		return true;
	}


	InvTabsForm: FormGroup;
	onSubmit(form) {
		
	}


	private formFieldsData: FormEntry = new FormEntry();
	private allDataObj:FormEntry = new FormEntry();
	constructor(private employeeService : EmployeeService,private formBuilder: FormBuilder,private router: Router) { 
this.gettabs1605861680528TabsData();


	this.InvTabsForm = this.formBuilder.group({ 
	 });

	}
	ngOnInit(): void {
	this.InvTabsForm.valueChanges.subscribe(form => {
		sessionStorage.setItem("InvTabsComponentForm", JSON.stringify(form));
	});
	}
}