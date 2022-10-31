import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Data} from "../models/data";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getData(id: number): Observable<Data> {
    // Throw error only for test
    //throw Error('Error while retrieving data');
    return of({
      id: id,
      name: "Name"
    });
  }

  constructor() {
  }
}
