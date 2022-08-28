import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  constructor(private http:HttpClient) {
  }

  getCovid(){
    return this.http.get<any>('https://covid19.ddc.moph.go.th/api/Cases/today-cases-all')
  }

  getProvinces(){
    return this.http.get<any>('https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces')
  }
}
