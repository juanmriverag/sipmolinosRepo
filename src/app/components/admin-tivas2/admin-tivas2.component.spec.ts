import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTivas2Component } from './admin-tivas2.component';

describe('AdminTivas2Component', () => {
  let component: AdminTivas2Component;
  let fixture: ComponentFixture<AdminTivas2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTivas2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTivas2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
