import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplelibraryComponent } from './samplelibrary.component';

describe('SamplelibraryComponent', () => {
  let component: SamplelibraryComponent;
  let fixture: ComponentFixture<SamplelibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamplelibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplelibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
