import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InMovsComponent } from './in-movs.component';

describe('InMovsComponent', () => {
  let component: InMovsComponent;
  let fixture: ComponentFixture<InMovsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InMovsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InMovsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
