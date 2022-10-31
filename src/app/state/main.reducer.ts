import {createReducer, on} from '@ngrx/store';
import {Data} from "../models/data";
import {errorLoadData, loadData, successLoadData} from "./main.actions";


export enum LoadingDataStatus {
  LOADING = 'LOADING',
  IDLE = 'IDLE',
  ERROR = 'ERROR'
}

export interface DataState {
  status: LoadingDataStatus;
  error: string;
  data?: Data;
}

export function getInitialDataState(): DataState {
  return {
    status: LoadingDataStatus.IDLE,
    error: "",
    data: undefined
  };
}

export const mainReducer = createReducer(
  getInitialDataState(),
  on(loadData, (state) => ({
    ...state,
    status: LoadingDataStatus.LOADING
  })),
  on(successLoadData, (state, action) => ({
    ...state,
    status: LoadingDataStatus.IDLE,
    data: action.data
  })),
  on(errorLoadData, (state, action) => ({
    ...state,
    status: LoadingDataStatus.ERROR,
    error: action.error
  }))
);
