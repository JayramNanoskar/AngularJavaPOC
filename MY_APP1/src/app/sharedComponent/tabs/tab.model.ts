import { Type } from '@angular/core';
import {COMPONENTREGISTRY} from '../../app-component-registry';
export class Tab {
  public id: number;
  public title: string;
  public tabData: any;
  public active: boolean;
  public component: Type<any>;
  public componentName: string;

  constructor(componentName: string, title: string, tabData: any) {
    this.tabData = tabData;
    this.component = COMPONENTREGISTRY.getTypeFor(componentName);
    this.title = title;
  }

}
