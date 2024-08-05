import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder, FormsModule} from '@angular/forms';
// import { NgModel } from '@angular/forms';
// import {delete} from ''

@Component({
  selector: 'app-tasklist',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.scss'
})
export class TasklistComponent {

  @ViewChild('myTableRef') myTableRef: ElementRef | undefined;

  // public myTableRef:any 
  public taskdata:any;
  public tablelistdata:boolean=true;
  public selecttrvalue:any;;
checkoutForm: any;
// profileForm: FormGroup;
 public createform:boolean=false;
 public updateform:boolean=false;
row: any;
constructor(){
  


  
  
  // debugger;
  console.log(this.taskdata)
  this.taskdata=[
    {
      "sn":1,
      "Title":"Office Open time",
      "status":"Pending",
      "priority":"High",
      "Due_date":"8/5/2024"
    },
    {
      "sn":2,
      "Title":"Payment collection",
      "status":"success",
      "priority":"High",
      "Due_date":"8/5/2024"
    },
    {
      "sn":3,
      "Title":"office close time",
      "status":"Pending",
      "priority":"High",
      "Due_date":"8/5/2024"
    },
    {
      "sn":4,
      "Title":"Doctors daily reports",
      "status":"reject",
      "priority":"High",
      "Due_date":"8/5/2024"
    },
    {
      "sn":5,
      "Title":"appointment date",
      "status":"Success",
      "priority":"High",
      "Due_date":"8/5/2024"
    },
    {
      "sn":6,
      "Title":"exray list",
      "status":"success",
      "priority":"High",
      "Due_date":"8/5/2024"
    }
  ]
}

trdelete(x:any){
var delBtn = confirm(" Do you want to delete ?");
  if ( delBtn == true ) {
this.taskdata.splice(x,1)
}  
}

traddTable() {
  this.createform=true;
  this.tablelistdata=false
}
trupdate(event: MouseEvent, item: any, index: number) {

  console.log('Edit icon clicked', event);
    console.log('Item:', item);
    console.log('Index:', index);
    this.tablelistdata=false;
    this.updateform=true;
    this.selecttrvalue=item;
    const objs = {
      sn: this.selecttrvalue.ID,
      status: this.selecttrvalue.taskstatus ,
      priority:  this.selecttrvalue.priority,
      Due_date: this.selecttrvalue.Due_date,
      Title: this.selecttrvalue.title
    }
    debugger;
    console.log(objs )
}

formData = {
  ID: '',
  Title: '',
  Priority:'',
  Due_date:'',
  Status:''
};
onSubmit(formData: any) {
let trlength=this.myTableRef?.nativeElement.querySelectorAll('tbody tr')
console.log(trlength)
  console.log(formData);
  if(formData.ID !=='' && formData.taskstatus !=='' && formData.priority !=='' && formData.title !==''){
  const obj = {
    sn: formData.ID,
    status:formData.taskstatus ,
    priority: formData.priority,
    Due_date:formData.Due_date,
    Title:formData.title
  }
  this.taskdata.push(obj)
  this.createform=false;
  this.tablelistdata=true;
}
}
createformclose(){
  this.createform=false;
  this.tablelistdata=true;
  this.updateform=false;
}
}
