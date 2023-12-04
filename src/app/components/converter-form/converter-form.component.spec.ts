import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConverterFormComponent } from './converter-form.component';

describe('ConverterFormComponent', () => {
  let component: ConverterFormComponent;
  let fixture: ComponentFixture<ConverterFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConverterFormComponent]
    });
    fixture = TestBed.createComponent(ConverterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
