import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { teachingComponent } from './teaching.component';

describe('teachingComponent', () => {
  let component: teachingComponent;
  let fixture: ComponentFixture<teachingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [teachingComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(teachingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});