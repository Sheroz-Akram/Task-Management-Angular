import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'task-header',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  title: String = 'Task Manager';
  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => {
      this.showAddTask = value;
    });
  }

  ngOnInit(): void {}

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }
}
