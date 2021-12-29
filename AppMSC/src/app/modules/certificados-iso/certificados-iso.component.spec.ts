import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadosISOComponent } from './certificados-iso.component';

describe('CertificadosISOComponent', () => {
  let component: CertificadosISOComponent;
  let fixture: ComponentFixture<CertificadosISOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadosISOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadosISOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
