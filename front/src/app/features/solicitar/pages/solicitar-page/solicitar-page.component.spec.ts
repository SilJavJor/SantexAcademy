import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarPageComponent } from './solicitar-page.component';

describe('SolicitarPageComponent', () => {
  let component: SolicitarPageComponent;
  let fixture: ComponentFixture<SolicitarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitarPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
