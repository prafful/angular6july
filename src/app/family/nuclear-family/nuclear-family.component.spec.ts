import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuclearFamilyComponent } from './nuclear-family.component';

describe('NuclearFamilyComponent', () => {
  let component: NuclearFamilyComponent;
  let fixture: ComponentFixture<NuclearFamilyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuclearFamilyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuclearFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
