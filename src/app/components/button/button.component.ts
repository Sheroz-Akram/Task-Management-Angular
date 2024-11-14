import { CommonModule } from '@angular/common';
import { Component, EventEmitter, input, Input, Output } from '@angular/core';

@Component({
  selector: 'simple-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() text: string = "Click";
  @Input() color: string = "black";
  @Output() btnClick = new EventEmitter();

  onClick(){
    this.btnClick.emit();
  }
}
