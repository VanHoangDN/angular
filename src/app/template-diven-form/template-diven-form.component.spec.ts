import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDivenFormComponent } from './template-diven-form.component';

describe('TemplateDivenFormComponent', () => {
  let component: TemplateDivenFormComponent;
  let fixture: ComponentFixture<TemplateDivenFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDivenFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
