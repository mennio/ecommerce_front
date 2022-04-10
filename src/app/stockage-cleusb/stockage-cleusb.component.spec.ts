import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockageCleusbComponent } from './stockage-cleusb.component';

describe('StockageCleusbComponent', () => {
  let component: StockageCleusbComponent;
  let fixture: ComponentFixture<StockageCleusbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockageCleusbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockageCleusbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
