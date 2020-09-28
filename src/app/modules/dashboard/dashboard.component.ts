import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { DashboardService } from '../dashboard.service';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  myValue: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', myValue: 3 },
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', myValue: 3 },
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', myValue: 3 },
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', myValue: 3 },
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', myValue: 3 },
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', myValue: 3 },
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', myValue: 3 },
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', myValue: 3 },
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', myValue: 3 },
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', myValue: 3 },
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na', myValue: 3 },
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg', myValue: 3 },
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al', myValue: 3 },
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si', myValue: 4 },
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P', myValue: 4 },
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S', myValue: 8 },
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl', myValue: 8 },
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar', myValue: 8 },
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K', myValue: 9 },
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca', myValue: 9 },
];




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit {

  bigChart = [] 
  cards = []
  pieChart = [] 
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','myValue'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  //For the table

  constructor(private _dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.bigChart = this._dashboardService.bigCharts();
    this.cards = this._dashboardService.cards();
    this.pieChart = this._dashboardService.pieChart();
    this.dataSource.paginator = this.paginator;
  }

}
