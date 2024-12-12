import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterParent102Component } from './counter-parent102.component';

describe('CounterParent102Component', () => {
  let component: CounterParent102Component;
  let fixture: ComponentFixture<CounterParent102Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterParent102Component]
    });
    fixture = TestBed.createComponent(CounterParent102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
