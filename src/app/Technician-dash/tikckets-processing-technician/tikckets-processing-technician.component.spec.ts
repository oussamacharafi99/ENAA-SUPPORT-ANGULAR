import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TikcketsProcessingTechnicianComponent } from './tikckets-processing-technician.component';

describe('TikcketsProcessingTechnicianComponent', () => {
  let component: TikcketsProcessingTechnicianComponent;
  let fixture: ComponentFixture<TikcketsProcessingTechnicianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TikcketsProcessingTechnicianComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TikcketsProcessingTechnicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
