import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PCPORTABLEComponent } from './pc-portable.component';

describe('PCPORTABLEComponent', () => {
  let component: PCPORTABLEComponent;
  let fixture: ComponentFixture<PCPORTABLEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PCPORTABLEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PCPORTABLEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
