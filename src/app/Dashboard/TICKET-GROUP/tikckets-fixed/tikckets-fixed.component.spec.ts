import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TikcketsFixedComponent } from './tikckets-fixed.component';

describe('TikcketsFixedComponent', () => {
  let component: TikcketsFixedComponent;
  let fixture: ComponentFixture<TikcketsFixedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TikcketsFixedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TikcketsFixedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
