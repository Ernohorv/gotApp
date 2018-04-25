import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Characters} from '../components/user/characters';

@Injectable()
export class DataService {

  constructor(public http: HttpClient) {
    console.log('Data service connected');
  }
  getPost(): Observable<Characters[]> {
    return this.http.get<Characters[]>('https://anapioficeandfire.com/api/characters/583');
  }

  getPostt(): Observable<Characters[]> {
    return this.http.get<Characters[]>('https://anapioficeandfire.com/api/characters/583', {
      responseType: 'json'
    });
  }
}
