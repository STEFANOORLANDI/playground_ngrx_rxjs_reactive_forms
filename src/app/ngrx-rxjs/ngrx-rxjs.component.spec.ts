import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxRxjsComponent } from './ngrx-rxjs.component';

describe('NgrxRxjsComponent', () => {
  let component: NgrxRxjsComponent;
  let fixture: ComponentFixture<NgrxRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxRxjsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgrxRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
