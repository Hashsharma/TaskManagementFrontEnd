import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
import { TaskModel } from 'src/models/tasks';

@Injectable({
  providedIn: 'root',
})
export class TaskserviceService {
  baseURL = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getAllTasks() {
    return this.http.get(this.baseURL + `/task/lists/?id=1`);
  }

  createTask(task: TaskModel) {
    return this.http.post(this.baseURL + `/task/create`, JSON.stringify(task));
  }

  deleteTask(TaskModel: TaskModel) {
    return this.http.post(this.baseURL + `/task/delete`, JSON.stringify(TaskModel));
  }

  getAllPendingTasks(userRID: number) {
    return this.http.get(this.baseURL + `/task/pending/?id=` + userRID);
  }

  getAllCompletedTasks(userRID: number) {
    return this.http.get(this.baseURL + `/task/completed/?id=` + userRID);
  }

  markTaskCompleted(TaskModel: TaskModel) {
    return this.http.post(this.baseURL + `/task/mark-completed`, JSON.stringify(TaskModel));
  }
}
