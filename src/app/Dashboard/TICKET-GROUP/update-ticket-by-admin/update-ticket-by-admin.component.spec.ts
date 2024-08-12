import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTicketByAdminComponent } from './update-ticket-by-admin.component';

describe('UpdateTicketByAdminComponent', () => {
  let component: UpdateTicketByAdminComponent;
  let fixture: ComponentFixture<UpdateTicketByAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTicketByAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTicketByAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
