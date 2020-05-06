import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTivasComponent } from './admin-tivas.component';

describe('AdminTivasComponent', () => {
  let component: AdminTivasComponent;
  let fixture: ComponentFixture<AdminTivasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTivasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
