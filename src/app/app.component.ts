import { Dialog } from '@angular/cdk/dialog';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CreateNewlistComponent } from './create-newlist/create-newlist.component';
import { NewList } from './newlist';
export interface PeriodicElement {
  position: number;
  name: string;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Simple Angular App';
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'actions'];
  data: PeriodicElement[] = ELEMENT_DATA;
  dataSource = new MatTableDataSource<PeriodicElement>();


  position: number = 1;
  name: string = "";
  weight: number = 0;
  symbol: string = "";
  newObj: PeriodicElement = {position: 50, name:"", weight: 0, symbol: ""};
  selectedElement?: any;
  constructor(private dialog: MatDialog) {}
  ngOnInit(): void {
    
  }
  openDialog() {

    const dialogConfig = new MatDialogConfig();

    //dialogConfig.disableClose = true;
    //dialogConfig.autoFocus = true;
    //obj.action = action;
   
    dialogConfig.data = {
      position: this.position,
      name: this.name,
      weight: this.weight,
      symbol: this.symbol
    };



    const dialogRef = this.dialog.open(CreateNewlistComponent, {width: '250px', data:{
      position: this.position,
      name: this.name,
      weight: this.weight,
      symbol: this.symbol
    }});
    dialogRef.afterClosed().subscribe(result => {
      console.log("BEFORE:", this.dataSource)

      // this.dataSource.push(result)
      // // this.dataSource.push(dialogConfig.data)
      // this.dataSource = new MatTableDataSource(this.dataSource);
      // console.log("after:", this.dataSource)
    });
  }

  // addRowData(row_obj: PeriodicElement) {
  //   this.dataSource.push({
  //     position: row_obj.position,
  //     name: row_obj.name,
  //     weight: row_obj.weight,
  //     symbol: row_obj.symbol
  //   });
  //   this.table.renderRows();
  // }
  onClick(element: any) {
    this.selectedElement = element;
  }

  addItem(val: any) {
    // this.dataSource.push(val);
  }

  
  

  

  @ViewChild(MatTable, { static: true })
  table!: MatTable<any>;
}


