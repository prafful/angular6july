import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumeRemoteServicComponent } from './consume-remote-servic.component';

describe('ConsumeRemoteServicComponent', () => {
  let component: ConsumeRemoteServicComponent;
  let fixture: ComponentFixture<ConsumeRemoteServicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumeRemoteServicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumeRemoteServicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
