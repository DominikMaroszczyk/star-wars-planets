import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, toArray } from 'rxjs/operators';
import { ApiResponseModel } from '../models/ApiResponse.model';
import { throwError } from 'rxjs/internal/observable/throwError';
import { concat, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  private _apiBaseUrl: string = 'https://swapi.dev/api/';

  constructor(private _http: HttpClient) {}

  //
  getDataFormEndPoints(endPoints: string[]): Observable<any[]> {
    return concat(
      ...endPoints.map((endPoint) => this.getDataFormEndPoint(endPoint))
    ).pipe(toArray());
  }

  //
  getDataFormEndPoint(endPoint: string): Observable<any> {
    return this._http.get(endPoint).pipe(
      map((data: any) => {
        return data;
      }),
      catchError((error) => {
        return throwError('Something went wrong!');
      })
    );
  }

  //
  getPlanetsByPage(page: number = 1): Observable<ApiResponseModel> {
    return this._http.get(`${this._apiBaseUrl}planets/?page=${page}`).pipe(
      map((data: ApiResponseModel) => {
        return data;
      }),
      catchError((error) => {
        return throwError('Something went wrong!');
      })
    );
  }
}
