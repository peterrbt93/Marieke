import { ComponentFixture, TestBed } from '@angular/core/testing';

import { instagramComponent } from './instagram.component';

describe('instagramComponent', () => {
  let component: instagramComponent;
  let fixture: ComponentFixture<instagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ instagramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(instagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
