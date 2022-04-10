import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockageDisquedurComponent } from './stockage-disquedur.component';

describe('StockageDisquedurComponent', () => {
  let component: StockageDisquedurComponent;
  let fixture: ComponentFixture<StockageDisquedurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockageDisquedurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockageDisquedurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
