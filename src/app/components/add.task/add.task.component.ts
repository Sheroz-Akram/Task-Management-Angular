import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Task } from '../../types/task.interface';

@Component({
  selector: 'add-task',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add.task.component.html',
  styleUrl: './add.task.component.scss'
})
export class AddTaskComponent {

  @Output() newTask = new EventEmitter<Task>();


  taskForm = new FormGroup(
    {
      text: new FormControl("", Validators.required),
      day: new FormControl("", Validators.required),
      reminder: new FormControl(false)
    }
  )

  handleFormSubmit(){
    if(this.taskForm.value.text?.length != 0 && this.taskForm.value.day?.length != 0){
      let task: Task = {
        text: this.taskForm.value.text!,
        day: this.taskForm.value.day!,
        reminder: this.taskForm.value.reminder!
      }
      this.newTask.emit(task);
    }
    else{
      alert("Please Fill The Add Form Complete");
    }
  }
}
