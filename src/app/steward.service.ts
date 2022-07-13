import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { GlobalParams } from './service/globalparams';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import { ResponseWrapper } from './wrapper/responsewrapper';


@Injectable({
  providedIn: 'root'
})
export class StewardService<T, E> {
  token!: string;

  constructor(
    private http: HttpClient,
    private globalParam: GlobalParams,
    private meta: Meta,
  ) { }
  getHeaders(header: string): HttpHeaders {
    // const csrf = this.meta.getTag('name=_csrf').content;
    const token = localStorage.getItem('access_token');
    switch (header) {

      case 'clean':
        return new HttpHeaders({
          'Content-Type': 'application/json; charset=utf-8',
          // 'X-CSRF-TOKEN': csrf
          Authorization: 'Bearer ' + token
        });
        break;
  
      case 'no-token':
        return new HttpHeaders({
          'Content-Type': 'application/json; charset=utf-8',
          // 'X-CSRF-TOKEN': csrf
        });
        break;

      case 'login':
        return new HttpHeaders({
          'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
          // 'X-CSRF-TOKEN': csrf
          Authorization: 'Basic ' + btoa('web-portal:Data2020.')
        });
        break;

      case 'plain':
        return new HttpHeaders({
          'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
          // 'X-CSRF-TOKEN': csrf
          Authorization: 'Bearer ' + token
        });
        break;
      case 'form-data':
        return new HttpHeaders({
          // 'X-CSRF-TOKEN': csrf
          Authorization: 'Bearer ' + token
        });
        break;

      case 'multi-part':
        return new HttpHeaders({
          'Content-type': 'multipart/form-data; charset=utf-8',
          // 'X-CSRF-TOKEN': csrf
          Authorization: 'Bearer ' + token
        });
        break;
        case 'sendToken':
          return new HttpHeaders({
            'Content-type': 'application/json; charset=utf-8',
            // 'X-CSRF-TOKEN': csrf
            Authorization: 'Basic ' + btoa('client:secret'),
          });
          break;

      default:
        return new HttpHeaders({
          'Content-Type': 'application/json; charset=utf-8',
          // 'X-CSRF-TOKEN': csrf
          Authorization: 'Bearer ' + token

        });
        break;
    }
  }
  post(endpoint: string, data: T): Observable<any> {
    return this.http.post(this.globalParam.baseUrl + endpoint, JSON.stringify(data),
     {headers: this.getHeaders('clean')
    })
    //  .pipe(
    //   catchError(this.handleError<any>())
    // );
  }

  postFormDataMultipart(endpoint: string, data: any): Observable<any> {
    const formData: FormData = new FormData();
    Object.keys(data).map((key) => {
      if (Array.isArray(data[key])) {
        data[key].forEach((k2: string | Blob) => {
          formData.append(key, k2);
        });
      } else {
        formData.append(key, data[key]);
      }
    });

    return this.http.post(this.globalParam.baseUrl + endpoint, formData, {headers: this.getHeaders('form-data')})
  
  }
  postNotoken(endpoint: string, data: T): Observable<any> {
    return this.http.post(this.globalParam.baseUrl + endpoint, JSON.stringify(data),
     {headers: this.getHeaders('no-token')
    })
    //  .pipe(
    //   catchError(this.handleError<any>())
    // );
  }
  sendToken(endpoint: string, data: T): Observable<any> {
    return this.http
      .post(this.globalParam.baseUrl + endpoint, data, {
        headers: this.getHeaders('no-token'),
      });
      // .pipe(catchError(this.handleError<any>()));
  }
  private getHttpParams(data: Map<string, string>): HttpParams {
    if (data === undefined) {
      return new HttpParams();
    }
    let httpParams: HttpParams = new HttpParams();
    data.forEach((value: string, key: string) => {
      httpParams = httpParams.append(key, value);
    });
    return httpParams;
  }
  get(endpoint: string, data?: Map<string, string>): Observable<any> {
    const options = {
      headers: this.getHeaders('clean'),
      // params: this.getHttpParams(data)
    };
    return this.http.get(this.globalParam.baseUrl + endpoint, options)

  }
  delete(endpoint: string, data?: Map<string, string>): Observable<any> {
    return this.http.delete(this.globalParam.baseUrl + endpoint, 
     {headers: this.getHeaders('clean')
    })
    //  .pipe(
    //   catchError(this.handleError<any>())
    // );
  }
  // getNotoken(endpoint: string, data?: Map<string, string>): Observable<ResponseWrapper<E>> {
  //   const options = {
  //     headers: this.getHeaders('no-token'),
  //     params: this.getHttpParams(data)
  //   };
  //   return this.http.get(this.globalParam.baseUrl + endpoint, options)
  //   .pipe(
  //     catchError(this.handleError<any>())
  //   );
  // }
  // put(endpoint: string, data: T): Observable<ResponseWrapper<E>> {
  //   return this.http.put(this.globalParam.baseUrl + endpoint, JSON.stringify(data), {headers: this.getHeaders('clean')}).pipe(
  //     catchError(this.handleError<any>())
  //   );
  // }
  private handleError() {
    return (error: HttpErrorResponse): Observable<any> => {
      const res = new ResponseWrapper();
      // tslint:disable-next-line:triple-equals
      if (error.status == 500) {
        res.code = error.status;
        res.message = 'Sorry internal server error occured please try again later';
      } else {
        res.code = error.status;
        res.message = error.error.message;
        res.data = error.error.data;
      }
      return of(res);
    };
  }
}