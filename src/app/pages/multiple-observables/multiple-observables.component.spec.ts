import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleObservablesComponent } from './multiple-observables.component';

describe('MultipleObservablesComponent', () => {
  let component: MultipleObservablesComponent;
  let fixture: ComponentFixture<MultipleObservablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleObservablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
