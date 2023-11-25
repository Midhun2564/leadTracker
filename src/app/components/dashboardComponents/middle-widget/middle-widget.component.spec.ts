import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleWidgetComponent } from './middle-widget.component';

describe('MiddleWidgetComponent', () => {
  let component: MiddleWidgetComponent;
  let fixture: ComponentFixture<MiddleWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiddleWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
