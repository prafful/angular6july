import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Consumeservice1Component } from './consumeservice1.component';

describe('Consumeservice1Component', () => {
  let component: Consumeservice1Component;
  let fixture: ComponentFixture<Consumeservice1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Consumeservice1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Consumeservice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
