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
}
trupdate(event: MouseEvent, item: any, index: number) {

  console.log('Edit icon clicked', event);
    console.log('Item:', item);
    console.log('Index:', index);
}
createformclose(){
  this.createform=false;
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
  const obj = {
    sn: formData.ID,
    status:formData.taskstatus ,
    priority: formData.priority,
    Due_date:formData.Due_date,
    Title:formData.title
  }
  this.taskdata.push(obj)
  this.createform=false;
}

}
