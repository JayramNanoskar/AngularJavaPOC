import { Component, OnInit,Output, EventEmitter, Input} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {
  panelOpenState = open;
  @Input() listData;

  @Output() linkClickEvent = new EventEmitter<string>();
 menuOptions= [];
 constructor(private router: Router) {}

  ngOnInit() {
    this.menuOptions = this.getMenuList();
  }
  getMenuList(){
    return this.listData;
  }

  redirectToURL(url: string) {
    //perform common task if required
    this.linkClickEvent.emit(url);
   }
}
