import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { NewScFormComponent } from '../new-sc-form/new-sc-form.component';


export interface PeriodicElement {
  name: string;
  position: number;
  since: string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'SRMIST Chennai', since: 'March 2018' },
  {position: 2, name: 'VIT Vellore', since: 'August 2019' },
  {position: 3, name: 'MIT Manglore', since: 'June 2020' },
  {position: 4, name: 'SRM Ghaziabad', since:'July 2019' },
  {position: 5, name: 'MIT Jaipur', since: 'April 2019' },
  {position: 6, name: 'IIT Madras', since: 'October 2020'},
  {position: 7, name: 'VIT Chennai', since: 'May 2018'},
];

@Component({
  selector: 'app-sc',
  templateUrl: './sc.component.html',
  styleUrls: ['./sc.component.css']
})
export class ScComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  //table data--
  displayedColumns: string[] = ['position', 'name', 'since'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  //openDialog--
  openDialog(){
    this.dialog.open(NewScFormComponent);
  }
}
  

