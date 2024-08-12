import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPanneComponent } from './dashboard-panne.component';

describe('DashboardPanneComponent', () => {
  let component: DashboardPanneComponent;
  let fixture: ComponentFixture<DashboardPanneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardPanneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardPanneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
