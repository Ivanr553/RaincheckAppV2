import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RainchecksComponent } from './rainchecks.component';

describe('RainchecksComponent', () => {
  let component: RainchecksComponent;
  let fixture: ComponentFixture<RainchecksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RainchecksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RainchecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
