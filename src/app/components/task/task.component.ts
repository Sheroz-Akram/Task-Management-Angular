import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../types/task.interface';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'task-item',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input() task: Task | undefined;
  @Output() deleteTask = new EventEmitter<number>();
  @Output() onToggleTask = new EventEmitter<number>();
  faTimes = faTimes;

  onDeleteTask(){
    this.deleteTask.emit(this.task?.id);
  }

  onToggle(){
    this.onToggleTask.emit(this.task?.id);
  }
  
}
