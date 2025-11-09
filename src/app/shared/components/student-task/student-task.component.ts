import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { log } from 'console';
import { Istd } from 'src/app/modules/todoLists';

@Component({
  selector: 'app-student-task',
  templateUrl: './student-task.component.html',
  styleUrls: ['./student-task.component.scss']
})
export class StudentTaskComponent implements OnInit {
  isEdit : boolean = false;

uuid = () => {
return (
String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx')
).replace(/[xy]/g, (character) => {
const random = (Math.random() * 16) | 0;
const value = character === "x" ? random : (random & 0x3) | 0x8;
return value.toString(16);
});
};

  stdArr:Array<Istd>=[
    {
      fname:'Vishnu',
      lname:"Jirge",
      email:'Vishnu@gmail.com',
      contact:'9856356328',
      stdId:this.uuid()
    }
  ]
  

  @ViewChild('fname') fRef!:ElementRef;
  @ViewChild('lname') lRef!:ElementRef;
  @ViewChild('email') eRef!:ElementRef;
  @ViewChild('contact') cRef!:ElementRef;


 
  constructor() { }
  ngOnInit(): void {
  }

 addStd()
   {
      let stdObj =  {
     fname:this.fRef.nativeElement.value,
     lname:this.lRef.nativeElement.value,
     email:this.eRef.nativeElement.value,
     contact:this.cRef.nativeElement.value,
     stdId:this.uuid()
    }
      console.log(stdObj);
      this.stdArr.push(stdObj)
      
   }

   onEdit(stdVal:Istd)
   {
     this.isEdit = true
     
      localStorage.setItem('Edit_Id',stdVal.stdId)
      this.fRef.nativeElement.value = stdVal.fname,
      this.lRef.nativeElement.value = stdVal.lname,
      this.eRef.nativeElement.value = stdVal.email,
      this.cRef.nativeElement.value = stdVal.contact
  
      
    }
  
     


   onUpdate()
   {
     let std_updatedId = localStorage.getItem('Edit_Id') 
     console.log(std_updatedId);

      if(std_updatedId)
        {
          let updatedObj = 
          {
            fname:this.fRef.nativeElement.value,
            lname:this.lRef.nativeElement.value,
            email:this.eRef.nativeElement.value,
            contact:this.cRef.nativeElement.value,
            stdId:std_updatedId 
          }

          console.log(updatedObj);
          let upStd = this.stdArr.findIndex(std=>std.stdId===std_updatedId)
          console.log(upStd);

          this.stdArr[upStd] = updatedObj
          
        }     
   }

   
   onDelete(stdDel:Istd)
   {
       let delStudent  = this.stdArr.findIndex(add=>add.stdId===stdDel)
       this.stdArr.splice(delStudent,1)
       
       console.log(stdDel);
       
   }

}