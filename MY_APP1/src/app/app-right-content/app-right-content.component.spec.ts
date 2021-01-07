import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRightContentComponent } from './app-right-content.component';

describe('AppRightContentComponent', () => {
  let component: AppRightContentComponent;
  let fixture: ComponentFixture<AppRightContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppRightContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRightContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
