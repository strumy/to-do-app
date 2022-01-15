import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Task} from '../Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggleStatus(enabled: boolean) {
    if (enabled == true) {
      return "Done"
    } else {
      return "Pending"
    }
  }

  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }

}
