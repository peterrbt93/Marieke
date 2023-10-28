import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { talksComponent } from './talks.component';

describe('talksComponent', () => {
  let component: talksComponent;
  let fixture: ComponentFixture<talksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [talksComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(talksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});