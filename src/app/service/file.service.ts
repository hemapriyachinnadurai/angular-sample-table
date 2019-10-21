import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http : HttpClient) { }

getData(){
  return this.http.get('../../assets/mockdata.json');
}
}