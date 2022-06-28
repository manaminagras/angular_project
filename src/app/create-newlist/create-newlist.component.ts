import { NewList } from '../newlist';
import { Component, OnInit, Input, Output, EventEmitter, Inject} from '@angular/core';
import { Router } from '@angular/router';
import { NewlistComponent } from '../newlist/newlist.component';
import { InputModalityDetector } from '@angular/cdk/a11y';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

export interface PeriodicElement {
  position: number;
  name: string;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-create-newlist',
  templateUrl: './create-newlist.component.html',
  styleUrls: ['./create-newlist.component.css']
})



export class CreateNewlistComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<PeriodicElement>();
  
  addNewItem() {
    var object = {position: this.itemId, name: this.itemName, weight: this.itemWeight, symbol: this.itemSymbol}
    // this.newItemEvent.emit(object);
    console.log("input val", object);
    this.dialogRef.close(object);
  }

  action:string;
  local_data:any;

  // form: FormGroup;
  //description: string;
  //id: number;
  // name: string;
  // weight: number;
  // symbol: string;
  itemId = 0;
  itemName = "";
  itemWeight = 0.0;
  itemSymbol = "";

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CreateNewlistComponent>,
  @Inject(MAT_DIALOG_DATA) data: PeriodicElement
  ) {
    //this.description = data.description;
    this.local_data = {...data};
    this.action = this.local_data.action;
    
    //this.form = data.form;
  }

   

  ngOnInit(): void {
    /*
    this.form = this.fb.group({
      name: [this.name, []],
      weight: [this.weight, []],
      symbol: [this.symbol, []],
      
      : [this.description, []]
    });
    */

  }

  save() {
    //this.dialogRef.close(this.form.value);
    /*
    var object = {position: this.itemId, name: this.itemName, weight: this.itemWeight, symbol: this.itemSymbol}
    if(localStorage.getItem("k")===null){
      var arr = [];
      arr.push(object);
      localStorage.setItem("k", JSON.stringify(arr))
    }
    else {
      var arr2 = JSON.parse(localStorage.getItem("k") || "");
      arr2.push(object);
      localStorage.setItem("k", JSON.stringify(arr2))
    }*/
    
    this.dialogRef.close({event:this.action, data:this.local_data});
  }

  close() {
    this.dialogRef.close();
  }

  onNameChange(value:string) {
    this.itemName = value;
  }
  onWeightChange(value:string) {
    this.itemWeight = Number(value);
  }
  onSymbolChange(value:string) {
    this.itemSymbol = value;
  }

  onAdd = new EventEmitter();

  onButtonClick() {
    this.onAdd.emit();
  }

  
}