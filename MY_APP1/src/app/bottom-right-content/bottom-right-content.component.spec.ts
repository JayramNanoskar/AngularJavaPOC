import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomRightContentComponent } from './bottom-right-content.component';

describe('BottomRightContentComponent', () => {
  let component: BottomRightContentComponent;
  let fixture: ComponentFixture<BottomRightContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomRightContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomRightContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
