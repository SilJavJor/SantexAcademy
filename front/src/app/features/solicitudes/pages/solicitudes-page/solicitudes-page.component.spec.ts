import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesPageComponent } from './solicitudes-page.component';

describe('SolicitudesPageComponent', () => {
  let component: SolicitudesPageComponent;
  let fixture: ComponentFixture<SolicitudesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
