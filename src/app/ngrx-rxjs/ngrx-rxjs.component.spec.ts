import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NgrxRxjsComponent} from './ngrx-rxjs.component';
import {provideMockStore} from "@ngrx/store/testing";
import {getInitialDataState} from "../state/main.reducer";

describe('NgrxRxjsComponent', () => {
  let component: NgrxRxjsComponent;
  let fixture: ComponentFixture<NgrxRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideMockStore({
          initialState: getInitialDataState()
        })
      ],
      declarations: [NgrxRxjsComponent]
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
