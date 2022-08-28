import {Component} from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 54, symbol: '1'},
  {position: 2, name: 'Helium', weight: 50, symbol: '2'},
  {position: 3, name: 'Lithium', weight: 60, symbol: '3'},
  {position: 4, name: 'Beryllium', weight: 90, symbol: '4'},
  {position: 5, name: 'Boron', weight: 54, symbol: '5'},
  {position: 6, name: 'Carbon', weight: 65, symbol: '6'},
  {position: 7, name: 'Nitrogen', weight: 45, symbol: '7'},
  {position: 8, name: 'Oxygen', weight: 69, symbol: '8'},
  {position: 9, name: 'Fluorine', weight: 49, symbol: '9'},
  {position: 10, name: 'Neon', weight: 56, symbol: '10'},
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-dashboard',
  styleUrls: ['dashboard.component.css'],
  templateUrl: 'dashboard.component.html',
})
export class TableBasicExample {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}
