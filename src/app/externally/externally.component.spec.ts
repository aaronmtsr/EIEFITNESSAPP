import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternallyComponent } from './externally.component';

describe('ExternallyComponent', () => {
  let component: ExternallyComponent;
  let fixture: ComponentFixture<ExternallyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternallyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
