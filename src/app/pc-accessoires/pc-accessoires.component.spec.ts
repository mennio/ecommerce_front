import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PCAccessoiresComponent } from './pc-accessoires.component';

describe('PCAccessoiresComponent', () => {
  let component: PCAccessoiresComponent;
  let fixture: ComponentFixture<PCAccessoiresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PCAccessoiresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PCAccessoiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
