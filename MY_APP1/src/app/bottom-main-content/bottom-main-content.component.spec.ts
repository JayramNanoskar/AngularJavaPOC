import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomMainContentComponent } from './bottom-main-content.component';

describe('BottomMainContentComponent', () => {
  let component: BottomMainContentComponent;
  let fixture: ComponentFixture<BottomMainContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomMainContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
