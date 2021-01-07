import{Component,OnInit} from "@angular/core";
import{ViewChildren,QueryList,ElementRef} from "@angular/core";
import {FormBuilder, FormGroup, FormArray, FormControl, Validators,FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EmployeeService} from "../service/employee.service";
import {FormEntry} from "../modals/formEntry";
import {Router} from '@angular/router';
import {registerComponent} from "../../app-component-registry";
@registerComponent
@Component({
	selector:"app-general-tab",
	templateUrl:"./general-tab.component.html",
	styleUrls:["./general-tab.component.css"]
})
export class GeneralTabComponent implements OnInit{

	onsubmitClicked($node,form){
		console.log('Submit Button Clicked.');
		this.formFieldsData = new FormEntry(this.GeneralTabForm.value);
		this.employeeService.postseSearchData(this.formFieldsData,'http://localhost:8081/createEmployee').subscribe(data => {
			form.reset();
			this.resetcountryCheckbox();
			alert("Form Submitted Successfully.");
		});
		return true;
	}


		@ViewChildren("countryCheckboxes") countryCheckboxes: QueryList<ElementRef>;
		onChangecountry(name: string, isChecked: boolean){
			const checkedVals = (this.GeneralTabForm.controls.seCountryId as FormArray);
			if (isChecked) {
				checkedVals.push(new FormControl(name));
			} else {
				const index = checkedVals.controls.findIndex(x => x.value === name);
				checkedVals.removeAt(index);
			}
		}
		resetcountryCheckbox(){
			this.countryCheckboxes.forEach((element) => {
				element.nativeElement.checked = false;
			});
		}


		ceCountryIdList = this.getceCountryIdList();
	getceCountryIdList() {
		this.employeeService.getceCountryIdList().subscribe(
			response =>this.handleSuccessfulResponseceCountryId(response),
		);
	}
	handleSuccessfulResponseceCountryId(response){
		this.ceCountryIdList=response;
	}


	GeneralTabForm: FormGroup;
	onSubmit(form) {
		
	}


	private formFieldsData: FormEntry = new FormEntry();
	private allDataObj:FormEntry = new FormEntry();
	constructor(private employeeService : EmployeeService,private formBuilder: FormBuilder,private router: Router) { 

	this.GeneralTabForm = this.formBuilder.group({ ceCountryId: new FormControl(''),
		seCountryId: this.formBuilder.array([]),
		seGenderId: new FormControl(''),
		seMobile: new FormControl(''),
		seEmpId: new FormControl(''),
	 });

	}
	ngOnInit(): void {
	this.GeneralTabForm.valueChanges.subscribe(form => {
		sessionStorage.setItem("GeneralTabComponentForm", JSON.stringify(form));
	});
	}
}