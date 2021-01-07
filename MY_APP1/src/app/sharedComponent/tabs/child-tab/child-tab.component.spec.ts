import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTabComponent } from './child-tab.component';

describe('ChildTabComponent', () => {
  let component: ChildTabComponent;
  let fixture: ComponentFixture<ChildTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
