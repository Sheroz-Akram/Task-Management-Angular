import { Injectable } from '@angular/core';
import { Task } from '../types/task.interface';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  baseURL: string = 'http://localhost:5000';
  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.baseURL}/tasks`);
  }

  deleteTask(taskID: number): Observable<Task> {
    return this.http.delete<Task>(`${this.baseURL}/tasks/${taskID}`);
  }

  toggleTaskReminder(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.baseURL}/tasks/${task.id}`, task, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }
}
