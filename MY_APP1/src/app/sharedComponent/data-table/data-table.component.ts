
import { Component, OnInit, ViewChild, Output,Input, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { moveItemInArray } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  @Input() tableData;
  @Input() columnHeader;
  @Input() sortingRequired = true;
  @Input() defaultSortingColumn;
  @Input() searchRequired;
  objectKeys = Object.keys;
  dataSource;
  highlightedRows = [];
  @Output() rowClickEvent = new EventEmitter<any>();
  @Output() customsortEvent = new EventEmitter<any>();
  @Output() deleteButtonEvent = new EventEmitter<any>();
  

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.tableData);
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    //this.dataSource.paginator = this.paginator;
  }

  public customSort = (event) => {
    console.log('custom sort');
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  sortColumn($event) {
    console.log('sort event ${JSON.stringify($event)}');
    console.log('$event.active ${$event.active}');
    this.customsortEvent.emit($event);
  }
 
  public redirectToDetails = (id: string) => {
    
  }
 
  public redirectToUpdate = (id: string) => {
    
  }
 
  public redirectToDelete = (id: string) => {
    
  }

  deleteItem(rowData){
    console.log('delete');
    this.deleteButtonEvent.emit(rowData);
  }

  rowClicked(rowData,elem){
    console.log('rowData' + rowData);
    this.highlightedRows=[];
    this.highlightedRows.push(rowData);
    this.rowClickEvent.emit(rowData);
  }


  
}
