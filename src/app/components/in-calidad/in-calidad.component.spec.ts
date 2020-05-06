import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InCalidadComponent } from './in-calidad.component';

describe('InCalidadComponent', () => {
  let component: InCalidadComponent;
  let fixture: ComponentFixture<InCalidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InCalidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InCalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
