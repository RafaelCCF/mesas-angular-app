import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RestTestService {

  constructor(private http: HttpClient) { }

  getObj(): Observable<Resp>{
    return this.http.get<Resp>('');
  }

}
interface Resp {
  id: number;
  content:string;
}