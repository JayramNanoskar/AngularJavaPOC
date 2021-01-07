import{Component,OnInit} from "@angular/core";
import {FormBuilder, FormGroup, FormArray, FormControl, Validators,FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppService} from "../service/app.service";
@Component({
	selector:"app-app-main-content",
	templateUrl:"./app-main-content.component.html",
	styleUrls:["./app-main-content.component.css"]
})
export class AppMainContentComponent implements OnInit{

		constructor(private appService : AppService) { }
	ngOnInit(): void {
}
}