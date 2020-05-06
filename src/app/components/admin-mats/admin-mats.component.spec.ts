import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMatsComponent } from './admin-mats.component';

describe('AdminMatsComponent', () => {
  let component: AdminMatsComponent;
  let fixture: ComponentFixture<AdminMatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
