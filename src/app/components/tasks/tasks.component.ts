import { Component, OnInit } from '@angular/core';
import { TaskComponent } from "../task/task.component";
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../types/task.interface';

@Component({
  selector: 'task-list',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private tasksService: TasksService) {}
  ngOnInit(): void {
    this.tasks = this.tasksService.getTasks();
  }
}
