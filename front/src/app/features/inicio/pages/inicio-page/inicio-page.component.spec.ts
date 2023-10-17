import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioPageComponent } from './InicioPageComponent';

describe('InicioPageComponent', () => {
  let component: InicioPageComponent;
  let fixture: ComponentFixture<InicioPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
