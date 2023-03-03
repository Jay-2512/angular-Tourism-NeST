import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient) { }
  addData = (body: any) => {

  }

  readData = () => {

  }

  deleteData = (id: any) => {

  }
}
