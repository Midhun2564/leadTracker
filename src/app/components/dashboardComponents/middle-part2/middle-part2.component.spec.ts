import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddlePart2Component } from './middle-part2.component';

describe('MiddlePart2Component', () => {
  let component: MiddlePart2Component;
  let fixture: ComponentFixture<MiddlePart2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiddlePart2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddlePart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
