import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Counter102Component } from './counter102.component';

describe('Counter102Component', () => {
  let component: Counter102Component;
  let fixture: ComponentFixture<Counter102Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Counter102Component]
    });
    fixture = TestBed.createComponent(Counter102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
