import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { AppComponent } from '../app.component';
import { TaskService } from '../services/task.service';
import { Task } from '../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  title: string = new AppComponent().title;

  constructor(private taskService: TaskService) { }

  toggleAddEntry() {
    console.log('toggleAddEntry')
  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask (task: Task) {
    this.taskService
    .deleteTask(task)
    .subscribe(
      () => (this.tasks = this.tasks.filter(t => t.id !== task.id)));
  }

  toggleEnabled(task: Task){
    task.enabled = !task.enabled;
    /*console.log(task.enabled);*/
    this.taskService.updateTaskEnabled(task).subscribe();
  }
}
