import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TikcketsFialurComponent } from './tikckets-fialur.component';

describe('TikcketsFialurComponent', () => {
  let component: TikcketsFialurComponent;
  let fixture: ComponentFixture<TikcketsFialurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TikcketsFialurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TikcketsFialurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
