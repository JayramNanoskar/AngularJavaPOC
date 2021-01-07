import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { AppMainContentComponent } from './app-main-content/app-main-content.component';
import { AppRightContentComponent } from './app-right-content/app-right-content.component';
import { BottomMenuComponent } from './bottom-menu/bottom-menu.component';
import { BottomMainContentComponent } from './bottom-main-content/bottom-main-content.component';
import { BottomRightContentComponent } from './bottom-right-content/bottom-right-content.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { MEMOTabComponent } from './employee/m-e-m-o-tab/m-e-m-o-tab.component';
import { DetailTabComponent } from './employee/detail-tab/detail-tab.component';
import { GeneralTabComponent } from './employee/general-tab/general-tab.component';
import { InvTabsComponent } from './employee/inv-tabs/inv-tabs.component';
import { MenuEmployeeComponent } from './employee/menu-employee/menu-employee.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { FormEntry } from './employee/modals/formEntry';

import { DataTableComponent } from './sharedComponent/data-table/data-table.component';
import { DataTreeComponent } from './sharedComponent/data-tree/data-tree.component';
import { MenuListComponent } from './sharedComponent/menu-list/menu-list.component';
import { RadioButtonComponent } from './sharedComponent/radio-button/radio-button.component';
import { TabsComponent } from './sharedComponent/tabs/tabs.component';
import { TabContentComponent } from "./sharedComponent/tabs/tab-content.component";
import { ContentContainerDirective } from "./sharedComponent/tabs/content-container.directive";

import { MatTableDataSource } from '@angular/material/table';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTreeModule } from '@angular/material/tree';
import {MatExpansionModule} from '@angular/material/expansion';
import { ChildTabComponent } from './sharedComponent/Tabs/child-tab/child-tab.component';


@NgModule({
  declarations: [
		EmployeeDetailsComponent,
		MEMOTabComponent,
		DetailTabComponent,
		GeneralTabComponent,
		InvTabsComponent,
		MenuEmployeeComponent,
		CreateEmployeeComponent,
	
		AppComponent,
    AppMenuComponent,
    AppMainContentComponent,
    AppRightContentComponent,
    BottomMenuComponent,
    BottomMainContentComponent,
    BottomRightContentComponent,
    PageNotFoundComponent,
    DataTableComponent,
    DataTreeComponent,
    RadioButtonComponent,
    MenuListComponent,
    TabsComponent,
    TabContentComponent,
    ContentContainerDirective,
    ChildTabComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    CommonModule,
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    DragDropModule,
    MatTreeModule,
    MatExpansionModule,
    ReactiveFormsModule
  ],
  exports: [
    AppMenuComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
