import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternallyComponent } from './internally.component';

describe('InternallyComponent', () => {
  let component: InternallyComponent;
  let fixture: ComponentFixture<InternallyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternallyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
