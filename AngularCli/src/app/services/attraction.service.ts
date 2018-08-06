import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()

export class AttractionService{

  constructor( private _http: HttpClient) { }
  
  getAllAttraction(){
    return this._http.get('http://192.168.253.1:3000/attraction/getAllAttraction/',{
      headers:new HttpHeaders().append('Content-Type','application/json'),
    })
    .map((response: Response) => response);
  }

  delete(id){
    return this._http.delete('http://192.168.253.1:3000/attraction/'+id,{
      headers:new HttpHeaders().append('Content-Type','application/json'),
    })
  }
}
