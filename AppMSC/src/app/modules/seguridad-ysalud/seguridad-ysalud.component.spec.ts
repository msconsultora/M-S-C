import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguridadYsaludComponent } from './seguridad-ysalud.component';

describe('SeguridadYsaludComponent', () => {
  let component: SeguridadYsaludComponent;
  let fixture: ComponentFixture<SeguridadYsaludComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeguridadYsaludComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguridadYsaludComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
