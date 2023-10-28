import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { outreachComponent } from './outreach.component';

describe('outreachComponent', () => {
  let component: outreachComponent;
  let fixture: ComponentFixture<outreachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [outreachComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(outreachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});