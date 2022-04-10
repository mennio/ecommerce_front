import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelSmartphoneComponent } from './tel-smartphone.component';

describe('TelSmartphoneComponent', () => {
  let component: TelSmartphoneComponent;
  let fixture: ComponentFixture<TelSmartphoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelSmartphoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelSmartphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
