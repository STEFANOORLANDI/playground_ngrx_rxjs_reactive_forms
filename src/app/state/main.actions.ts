import {createAction, props} from '@ngrx/store';
import {Data} from "../models/data";


export const loadData = createAction(
  '[Main Load Data] Load data',
  props<{ id: number }>());

export const successLoadData = createAction(
  '[Main Success Load Data] Success load data',
  props<{ data: Data }>()
);

export const errorLoadData = createAction(
  '[Main Error Load Data] Error load data',
  props<{ error: string }>()
);
