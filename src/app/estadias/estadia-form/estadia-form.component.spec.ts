import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadiaFormComponent } from './estadia-form.component';

describe('EstadiaFormComponent', () => {
  let component: EstadiaFormComponent;
  let fixture: ComponentFixture<EstadiaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadiaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadiaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
