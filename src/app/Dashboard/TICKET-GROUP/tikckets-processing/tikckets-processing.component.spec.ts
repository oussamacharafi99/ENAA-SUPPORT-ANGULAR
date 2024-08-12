import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TikcketsProcessingComponent } from './tikckets-processing.component';

describe('TikcketsProcessingComponent', () => {
  let component: TikcketsProcessingComponent;
  let fixture: ComponentFixture<TikcketsProcessingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TikcketsProcessingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TikcketsProcessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
