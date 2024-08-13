import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTicketsTechnicianComponent } from './update-tickets-technician.component';

describe('UpdateTicketsTechnicianComponent', () => {
  let component: UpdateTicketsTechnicianComponent;
  let fixture: ComponentFixture<UpdateTicketsTechnicianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTicketsTechnicianComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTicketsTechnicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
