import { Component, OnInit } from '@angular/core';
import { registerComponent } from '../../../app-component-registry';
@registerComponent
@Component({
  selector: 'app-child-tab',
  templateUrl: './child-tab.component.html',
  styleUrls: ['./child-tab.component.css']
})
export class ChildTabComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
