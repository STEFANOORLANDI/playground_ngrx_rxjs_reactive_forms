import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {interval, tap} from "rxjs";
import {Data} from "../models/data";
import {DataState, LoadingDataStatus} from "../state/main.reducer";
import {loadData} from "../state/main.actions";

@Component({
  selector: 'app-ngrx-rxjs',
  templateUrl: './ngrx-rxjs.component.html',
  styleUrls: ['./ngrx-rxjs.component.css']
})
export class NgrxRxjsComponent implements OnInit {

  isLoading = false;
  isError = false;
  errorMessage = '';
  data?: Data = undefined;
  dataString: string = '';
  seconds: number = 0;

  constructor(private store: Store<{ dataState: DataState }>) {
  }

  ngOnInit(): void {
    this.store.dispatch(loadData({id: 1}));

    this.store
      .select('dataState')
      .pipe(
        tap((dataState) => {
          this.isLoading = dataState.status == LoadingDataStatus.LOADING;
          this.isError = dataState.status == LoadingDataStatus.ERROR;
          this.errorMessage = dataState.error;
          this.data = dataState.data;
          this.dataString = JSON.stringify(dataState.data);
        })
      )
      .subscribe();

    // Interval example
    let $intervalObs = interval(1000);

    $intervalObs.pipe(
      tap((value) => this.seconds = value)
    ).subscribe();
  }
}
