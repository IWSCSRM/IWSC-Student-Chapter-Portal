import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewScFormComponent } from './new-sc-form.component';

describe('NewScFormComponent', () => {
  let component: NewScFormComponent;
  let fixture: ComponentFixture<NewScFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewScFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewScFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
