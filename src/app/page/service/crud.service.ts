import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable, pluck, throwError } from 'rxjs';
import { catchError } from 'rxjs';
import { Post, product } from './sample-data';

@Injectable({
  providedIn: 'root' 
}) 
export class CrudService {  

  private APIURL = 'http://localhost:3000';
  private productUrl = 'http://localhost:3000/products';

  httpOptions = {headers : new HttpHeaders({'content-type' : 'application/json'})};
  
  constructor(private client:HttpClient) {  }


  getAll(): Observable<Post[]>{
    return this.client.get<Post[]>(this.APIURL + '/posts/')
    .pipe(catchError(this.errorHandler))
  }
getProduct(){
  return this.client.get<product[]>(this.productUrl).pipe(catchError(this.errorHandler));
}


// For Define Error 

errorHandler(error:any){
let errorMessage = '';
if(error.error instanceof ErrorEvent){
  errorMessage = error.error.message;
} else{
  errorMessage = `Error Code : ${error.status}\n Message: ${error.message}`
}
return throwError(errorMessage)
}


}
