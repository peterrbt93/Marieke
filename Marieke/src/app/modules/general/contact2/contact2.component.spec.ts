import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { contact2Component } from './contact2.component';

describe('contact2Component', () => {
  let component: contact2Component;
  let fixture: ComponentFixture<contact2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [contact2Component]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(contact2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});