import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EternallyComponent } from './eternally.component';

describe('EternallyComponent', () => {
  let component: EternallyComponent;
  let fixture: ComponentFixture<EternallyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EternallyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EternallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
