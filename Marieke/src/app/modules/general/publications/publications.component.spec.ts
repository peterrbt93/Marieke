import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { publicationsComponent } from './publications.component';

describe('publicationsComponent', () => {
  let component: publicationsComponent;
  let fixture: ComponentFixture<publicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [publicationsComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(publicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});