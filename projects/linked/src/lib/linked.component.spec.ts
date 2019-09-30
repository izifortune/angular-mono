import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedComponent } from './linked.component';

describe('LinkedComponent', () => {
  let component: LinkedComponent;
  let fixture: ComponentFixture<LinkedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
