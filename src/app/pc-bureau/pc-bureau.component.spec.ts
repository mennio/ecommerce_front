import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PCBUREAUComponent } from './pc-bureau.component';

describe('PCBUREAUComponent', () => {
  let component: PCBUREAUComponent;
  let fixture: ComponentFixture<PCBUREAUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PCBUREAUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PCBUREAUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
