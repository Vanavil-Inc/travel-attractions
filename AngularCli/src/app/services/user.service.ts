import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';
// import 'rxjs/add/operator/map';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/catch';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  result:any;

  constructor( private _http: HttpClient,private http: Http) { }

  registerUser(body:any){
    return this._http.post('http://192.168.253.1:3000/user/registerUser', body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }

  login(body:any){
    return this._http.post('http://192.168.253.1:3000/user/loginUser', body,{
      observe:'body',
      withCredentials:true, /*withCredentials this function cookie will be available in browser*/
      headers:new HttpHeaders().append('Content-Type','application/json'),
    });
  }

  user(){
    return this._http.get('http://192.168.253.1:3000/user/getUser',{
      observe:'body',
      withCredentials:true, /*withCredentials this function cookie will be available in browser*/
      headers:new HttpHeaders().append('Content-Type','application/json'),
    });
  }
 
  logout(){
    return this._http.get('http://192.168.253.1:3000/user/logout',{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json'),
    });
  }

  attractionDetails(body:any){
    return this._http.post('http://192.168.253.1:3000/attraction/attractionPlace', body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }
  
  userComment(body:any){
    return this._http.post('http://127.0.0.1:3000/users/userComment', body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }
}


// getAttraction(){
//   return this._http.get('http://192.168.253.1:3000/attraction/get-attraction',{
//     observe:'body',
//     headers:new HttpHeaders().append('Content-Type','application/json'),
//   });
// }