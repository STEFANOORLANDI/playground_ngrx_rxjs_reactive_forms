import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {catchError, delay, map, of} from 'rxjs';
import {mergeMap} from 'rxjs/operators';
import {errorLoadData, loadData, successLoadData} from "./main.actions";
import {DataService} from "../services/data.service";
import {DataState} from "./main.reducer";

@Injectable()
export class MainEffects {
  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadData),
      // Delay only for test
      //delay(1000),
      mergeMap((action) =>
        this.dataService.getData(action.id).pipe(
          map((data) => successLoadData({data}))
        )
      ),
      catchError((error) => of(errorLoadData({error})))
    )
  );

  constructor(private actions$: Actions, private store: Store<{dataState: DataState}>, private dataService: DataService) {
  }
}
