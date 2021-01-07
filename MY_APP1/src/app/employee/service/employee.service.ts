import{Injectable}from"@angular/core";
import{HttpClient}from"@angular/common/http";
import {FormEntry} from "../modals/formEntry";
@Injectable({
	providedIn:"root"
})
export class EmployeeService{
	constructor(private httpClient:HttpClient){
	}

	postceCreateData(formEntry: FormEntry, url:string){
		return this.httpClient.post('http://localhost:8081/createEmployee',formEntry);
	}
	getmMenuListListData(){
		return this.httpClient.get('http://localhost:8081/ResourceTrack/getMenuList');
	}
	gettabs1605861680528TabsData(){
		return this.httpClient.get('http://localhost:8081/ResourceTrack/getMainTabList');
	}
	postAlltabs1605861680528Data(formEntry: FormEntry, url:string){
		return this.httpClient.post(url,formEntry);
	}
	getceCountryIdList(){
		return this.httpClient.get('http://localhost:8081/ResourceTrack/getCountries');
	}
	postseSearchData(formEntry: FormEntry, url:string){
		return this.httpClient.post('http://localhost:8081/createEmployee',formEntry);
	}
	postcdSearchData(formEntry: FormEntry, url:string){
		return this.httpClient.post('http://localhost:8081/createEmployee',formEntry);
	}
	postseSearch1Data(formEntry: FormEntry, url:string){
		return this.httpClient.post('http://localhost:8081/createEmployee',formEntry);
	}
	getedSearchTableColumnHeader(){
		return this.httpClient.get('http://localhost:8081/ResourceTrack/getEmployeesHeader');
	}
	getedSearchTableTableData(){
		return this.httpClient.get('http://localhost:8081/ResourceTrack/getEmployees');
	}}