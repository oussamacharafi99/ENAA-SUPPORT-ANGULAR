import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TikcketsFixedTechnicianComponent } from './tikckets-fixed-technician.component';

describe('TikcketsFixedTechnicianComponent', () => {
  let component: TikcketsFixedTechnicianComponent;
  let fixture: ComponentFixture<TikcketsFixedTechnicianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TikcketsFixedTechnicianComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TikcketsFixedTechnicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
