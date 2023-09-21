import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonarPageComponent } from './donar-page.component';

describe('DonarPageComponent', () => {
  let component: DonarPageComponent;
  let fixture: ComponentFixture<DonarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonarPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
