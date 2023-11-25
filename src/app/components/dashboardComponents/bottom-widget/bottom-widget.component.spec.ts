import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomWidgetComponent } from './bottom-widget.component';

describe('BottomWidgetComponent', () => {
  let component: BottomWidgetComponent;
  let fixture: ComponentFixture<BottomWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
