import { Component, OnInit } from '@angular/core';
import { Task } from '../../types/task.interface';
import { TaskComponent } from "../task/task.component";

@Component({
  selector: 'task-list',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [
    {
      "id": 1,
      "text": "Doctors Appointment",
      "day": "May 5th at 2:30pm",
      "reminder": true
    },
    {
      "id": 2,
      "text": "Meeting at School",
      "day": "May 6th at 1:30pm",
      "reminder": true
    },
    {
      "id": 3,
      "text": "Food Shopping",
      "day": "May 7th at 12:30pm",
      "reminder": false
    }
  ];

  constructor() {}
  ngOnInit(): void {
    
  }
}