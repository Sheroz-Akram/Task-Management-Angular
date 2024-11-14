import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'task-header',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  title: String = "Task Manager"
  toggle: boolean = true;
  
  constructor() {}
  
  ngOnInit(): void {
    
  }

  toggleAddTask(){
    this.toggle = !this.toggle;
  }

}
