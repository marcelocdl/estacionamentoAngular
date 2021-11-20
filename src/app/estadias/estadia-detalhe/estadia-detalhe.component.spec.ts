import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadiaDetalheComponent } from './estadia-detalhe.component';

describe('EstadiaDetalheComponent', () => {
  let component: EstadiaDetalheComponent;
  let fixture: ComponentFixture<EstadiaDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadiaDetalheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadiaDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
