import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient:HttpClient) { }


	getcountryIdList(){
		return this.httpClient.get('http://localhost:8080/ResourceTrack/getCountries');
	}
	getroleIdList(){
		return this.httpClient.get('http://localhost:8080/ResourceTrack/getEmpRoles');
	}
	getsearchTableColumnHeader(){
		return this.httpClient.get('http://localhost:8080/ResourceTrack/getEmployeesHeader');
	}
	getsearchTableTableData(){
		return this.httpClient.get('http://localhost:8080/ResourceTrack/getEmployees');
	}}	