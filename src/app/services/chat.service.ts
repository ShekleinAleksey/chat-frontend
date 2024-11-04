import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { }

  url: string = 'http://localhost:8000/';
  // myHeaders = new HttpHeaders().set('Access-Control-Allow-Origin', '*');

//   login(login: string, password: string) {
//     return this.http.post(this.url, { login, password }, 
//       // {headers: this.myHeaders} 
//       );
//   }

  getMessages() {
    return this.http.get(this.url + "getMessages");
  }

  signUp(userData: any): any {
    return this.http.post(this.url + "sign-up", userData);
  }

  signIn(username: string, password: string): any {
    const userData = {
      username: username,
      password: password
    };
    return this.http.post(this.url + "sign-in", userData);
  }
}