import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Istd, Itodo } from 'src/app/modules/todoLists';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.scss']
})
export class TodoTaskComponent implements OnInit {

  uuid = () => {
return (
String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx')
).replace(/[xy]/g, (character) => {
const random = (Math.random() * 16) | 0;
const value = character === "x" ? random : (random & 0x3) | 0x8;
return value.toString(16);
});
};



  todoArr:Array<Itodo> = [
    {
      todoItem:'Angular',
      todoId:this.uuid()
    }
  ]
  @ViewChild('todo')todoRef!:ElementRef;
  constructor(private snackBar:MatSnackBar) { }
 
  ngOnInit(): void {
  }
   
  isEdit:boolean = false
  editTodoId!: string
   addTodo(todoInput:HTMLInputElement)
   {
     if(todoInput.value.length>0)
     {
       let todoObj:Itodo = 
       {
        todoItem:todoInput.value,
        todoId:this.uuid()
        
      }
      this.todoArr.unshift(todoObj)
      this.snackBar.open('Suceessfully Added' ,'close',{ duration: 1000})
       console.log(todoObj);
       todoInput.value = ''
     }
     
   }


   onEdit(todoEdit:Itodo)
   {
     this.isEdit =  true,
     this.editTodoId = todoEdit.todoId,
     localStorage.setItem('Edit_Id' , this.editTodoId)
this.todoRef.nativeElement.value = todoEdit.todoItem
 this.todoRef.nativeElement.focus();
  
   }
   
   onUpdate(todoUpdate:HTMLInputElement)
   {
      let updated_Id = localStorage.getItem('Edit_Id')
      if(updated_Id)
      {
        let updated_Obj :Itodo = {
       todoItem:todoUpdate.value,
         todoId:updated_Id
      }

      let index = this.todoArr.findIndex(add=>add.todoId===updated_Id)
      this.todoArr[index]=updated_Obj
     this.snackBar.open('Suceessfully Updated' ,'close', { duration: 1000})
   }
   todoUpdate.value = ''
   this.isEdit = false
this.editTodoId = ''

  }
  onDelete(todoId:string)
  {
  let index =this.todoArr.findIndex(todo => todo.todoId === todoId)
this.todoArr.splice(index,1)
  this.snackBar.open('Deleted Suceessfully' ,'close', {duration: 1000})
  }
   

  onCancel()
  {
     this.todoRef.nativeElement.value = ''
     this.isEdit= false
    }
    

}

