import { Component } from '@angular/core';
import { ServiceService } from './service.service';
import { Day } from './covid';
import { Province } from './covid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title='app'
  dayinfo: Day[] = [];
  provinceinfo: Province[] = [];
  searchprovince: Province[] = [];

  constructor(private service: ServiceService) {
    this.service.getCovid().subscribe( response =>{
      this.dayinfo = response;
    })

    this.service.getProvinces().subscribe( response =>{
      this.provinceinfo = response;
    })
  }


  buttonProvince(name:number){
    // for (let index = 0; index < this.provinceinfo.length; index++) {
      // if (index === name) {
         this.searchprovince[0] = this.provinceinfo[name];
      // }
    //}
  }
}
