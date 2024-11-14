import { Component, Input } from '@angular/core';
import { Task } from '../../types/task.interface';


@Component({
  selector: 'task-item',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input() task: Task | undefined;
}
