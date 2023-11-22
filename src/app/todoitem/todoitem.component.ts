import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todoitem',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todoitem.component.html',
  styleUrl: './todoitem.component.css'
})
export class TodoitemComponent {

  @Input() task: any;
  @Output() deleteTask = new EventEmitter<number>();


  onDeleteTask(){

    this.deleteTask.emit(this.task.id);
  }

}
