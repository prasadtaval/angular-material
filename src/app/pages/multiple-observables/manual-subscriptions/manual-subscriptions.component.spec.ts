import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualSubscriptionsComponent } from './manual-subscriptions.component';

describe('ManualSubscriptionsComponent', () => {
  let component: ManualSubscriptionsComponent;
  let fixture: ComponentFixture<ManualSubscriptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualSubscriptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualSubscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
