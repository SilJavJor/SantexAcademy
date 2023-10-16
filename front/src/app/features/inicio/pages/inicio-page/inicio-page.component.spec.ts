import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< Updated upstream
<<<<<<< Updated upstream
import { InicioPageComponent } from './inicio-page.component';
=======
import { InicioPageComponent } from './InicioPageComponent';
>>>>>>> Stashed changes
=======
import { InicioPageComponent } from './InicioPageComponent';
>>>>>>> Stashed changes

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
