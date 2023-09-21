import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaneladmPageComponent } from './paneladm-page.component';

describe('PaneladmPageComponent', () => {
  let component: PaneladmPageComponent;
  let fixture: ComponentFixture<PaneladmPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaneladmPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaneladmPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
