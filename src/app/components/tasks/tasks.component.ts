import { Component, OnInit } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../types/task.interface';
import { HttpClientModule } from '@angular/common/http';
import { AddTaskComponent } from "../add.task/add.task.component";

@Component({
  selector: 'task-list',
  standalone: true,
  imports: [TaskComponent, HttpClientModule, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private tasksService: TasksService) {}
  ngOnInit(): void {
    this.tasksService.getTasks().subscribe((value) => {
      this.tasks = value;
    });
  }

  onDeleteTask(taskID: number) {
    this.tasksService.deleteTask(taskID).subscribe(() => {
      this.tasks = this.tasks.filter((t) => t.id != taskID);
    });
  }

  onToggleTask(taskID: number) {
    let index: number = this.tasks.findIndex((t) => t.id === taskID);
    this.tasks[index].reminder = !this.tasks[index].reminder;
    this.tasksService.toggleTaskReminder(this.tasks[index]).subscribe(() => {});
  }

  onTaskAdd(task: Task){
    this.tasksService.createTask(task).subscribe((t) => {
      this.tasks.push(t);
    })
  }
}
