import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportTableComponent } from './rapport-table.component';

describe('RapportTableComponent', () => {
  let component: RapportTableComponent;
  let fixture: ComponentFixture<RapportTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RapportTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RapportTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
