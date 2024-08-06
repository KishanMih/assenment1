import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder, FormsModule} from '@angular/forms';

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
  public selecttrvalue:any= {
    ID: '',
    priority: '',
    Due_date: '',
    Title: '',
    status: ''
  };
  public selecttrindex_update:any;
  // public item:any; //delete feching style items
  public checkoutForm: any;
  public createform:boolean=false;
  public updateform:boolean=false;
  filteredData: any[] = []; // stored filled value 
  filterTitle: string = '';
  filtersn: any;
row: any;

applyFilter(columnName: string): void {
  let filterValue: string|number;

  switch (columnName) {
    case 'Title':
      filterValue = this.filterTitle;
      break;
    case 'sn':
      filterValue = this.filtersn;
      break;
   
    default:
      return; // no value retrun comes now that
  }

  if (filterValue) {
    this.filteredData = this.taskdata.filter((item: any) => String(item[columnName]).toLowerCase().includes(String(filterValue).toLowerCase()));
  } else {
    this.filteredData = [...this.taskdata];//filter empty value deleteing to this conditions
  }
}
constructor(){
  this.taskdata=[
    {
      "sn":1,
      "Title":"Office Open time",
      "status":"Pending",
      "priority":"Mideum",
      "Due_date":"05-08-2024"
    },
    {
      "sn":2,
      "Title":"Payment collection",
      "status":"success",
      "priority":"High",
      "Due_date":"05-08-2024"
    },
    {
      "sn":3,
      "Title":"office close time",
      "status":"Pending",
      "priority":"High",
      "Due_date":"05-08-2024"
    },
    {
      "sn":4,
      "Title":"Doctors daily reports",
      "status":"reject",
      "priority":"High",
      "Due_date":"05-08-2024"
    },
    {
      "sn":5,
      "Title":"appointment date",
      "status":"success",
      "priority":"High",
      "Due_date":"05-08-2024"
    },
    {
      "sn":6,
      "Title":"exray list",
      "status":"success",
      "priority":"Low",
      "Due_date":"05-08-2024"
    }
  ]
  this.filteredData = [...this.taskdata];
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
trupdate(event: Event, item: any, index: number) {
  this.tablelistdata = false;
  this.updateform = true;
  this.selecttrvalue = item;
  this.selecttrindex_update=index;
}

// formData = {
//   ID: '',
//   Title: '',
//   Priority:'',
//   Due_date:'',
//   Status:''
// };
onSubmit(formData: any) {
  let obj;

  // Trim input values to handle cases where users enter only spaces
  formData.ID = formData.ID;
  formData.taskstatus = formData.taskstatus;
  formData.priority = formData.priority;
  formData.title = formData.title;
  formData.updateID = formData.updateID;
  formData.updatepriority = formData.updatepriority;
  formData.updateDue_date = formData.updateDue_date;
  formData.updatetitle = formData.updatetitle;

  if (formData.ID !== '' && formData.taskstatus !== '' && formData.priority !== '' && formData.title !== '') {
    obj = {
      sn: formData.ID,
      status: formData.taskstatus,
      priority: formData.priority,
      Due_date: formData.Due_date,
      Title: formData.title
    };
    this.taskdata.push(obj);
    this.createform = false;
    this.tablelistdata = true;
  } else if (formData.updateID !== '' && formData.updatepriority !== '' && formData.updateDue_date !== '' && formData.updatetitle !== '') {
    obj = {
      sn: formData.updatepriority,
      status: formData.updatetaskstatus,
      priority: formData.updatepriority,
      Due_date: formData.updateDue_date, 
      Title: formData.updatetitle
    };
    if (obj.sn && obj.status && obj.priority && obj.Due_date && obj.Title) {
      if (!Array.isArray(this.taskdata[this.selecttrindex_update])) {
          this.taskdata[this.selecttrindex_update] = [];
      }
      this.taskdata[this.selecttrindex_update].push(obj);
      
  }
  } else {
    console.log("Form data is insufficient or invalid.");
  }
  this.createform = false;
      this.tablelistdata = true;
      this.updateform = false;
}

createformclose(){
  this.createform=false;
  this.tablelistdata=true;
  this.updateform=false;
}

}
