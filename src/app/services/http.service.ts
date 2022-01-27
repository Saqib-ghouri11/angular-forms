import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private httpClient:HttpClient
  ) {}

  //here we are sending user model to the post url
  postService(url:string,user:User){
    return this.httpClient.post<any>(url,user)
    //here we are handling error by catching the error response from server.
    .pipe(catchError(this.errorHandler));

  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error);
  }
}
