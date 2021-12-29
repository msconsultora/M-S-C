import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpmYleanComponent } from './tpm-ylean.component';

describe('TpmYleanComponent', () => {
  let component: TpmYleanComponent;
  let fixture: ComponentFixture<TpmYleanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TpmYleanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TpmYleanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
