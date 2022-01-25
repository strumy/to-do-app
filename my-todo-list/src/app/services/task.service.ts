import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
/*import { Observable, of } from 'rxjs'*/
import { Observable } from 'rxjs'
import { Task } from '../Task';
/*import { TASKS } from '../mock-data';*/

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://data:5000/tasks'
  
  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
    /*const tasks = of(TASKS);
    return tasks;*/
  }

  deleteTask (task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    /*console.log(url);*/
    return this.http.delete<Task>(url);
  }

  updateTaskEnabled(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}/`;
    /*const url = this.apiUrl + task.id;*/
    /*console.log(task.id);*/
    return this.http.put<Task>(url, task, httpOptions);
  }

}
