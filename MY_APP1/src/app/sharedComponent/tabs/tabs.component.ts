import { Component, OnInit, ViewChild, Output,Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  @Input() tabs;
  @Input() selectedTab:Number;

  @Output() tabChangedEvent = new EventEmitter<any>();

  
  constructor() {}

  ngOnInit() {
    //  this.tabs.subscribe(tabs => {
    //   this.selectedTab = tabs.findIndex(tab => tab.active);
    //  });
  }

  tabChanged(event) {
    console.log("tab changed");
    this.tabChangedEvent.emit(event);
  }

  // addNewTab() {
  //   this.tabService.addTab(
  //     new Tab(Comp1Component, "Memo Wizard", { parent: "AppComponent" },
      
  //     )
  //   );
  // }

  // removeTab(index: number): void {
  //   this.tabService.removeTab(index);
  // }
}
