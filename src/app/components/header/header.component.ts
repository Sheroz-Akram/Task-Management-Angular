import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'task-header',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  title: String = "Task Manager"
  
  constructor() {}
  
  ngOnInit(): void {
    
  }

  toggleAddTask(){
    console.log("Task Add Toggle");
  }

}
