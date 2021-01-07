import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { InvTabsComponent } from './employee/inv-tabs/inv-tabs.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


//const routes: Routes = [];
const appRoutes: Routes = [
  //{ path: '',   redirectTo: 'my', pathMatch: 'full' },
 
  { path: 'otherDetails', component: InvTabsComponent },
  { path: 'empDetails', component: EmployeeDetailsComponent },
  { path: 'searchEmp', component: PageNotFoundComponent },
  { path: 'createEmp', component: CreateEmployeeComponent },
  // { path: '**', component: PageNotFoundComponent }
];


  @NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
      )
    ],
    exports: [RouterModule]
  })
export class AppRoutingModule { }
