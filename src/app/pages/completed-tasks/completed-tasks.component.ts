import { Component } from '@angular/core';
import { TaskModel } from 'src/models/tasks';
import { TaskserviceService } from 'src/services/userservices/taskservice.service';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.scss'],
})
export class CompletedTasksComponent {
  displayedColumns: string[] = [
    'serial',
    'title',
    'description',
    'date',
    'time',
  ];

  taskPendingList: any;
  taskData: TaskModel = <TaskModel>{};
  userRID = 1;

  constructor(private taskService: TaskserviceService) {}

  ngOnInit() {
    this.getAllPendingTasks();
  }

  getAllPendingTasks() {
    this.taskService
      .getAllCompletedTasks(this.userRID)
      .subscribe((res: any) => {
        this.taskPendingList = res;
      });
  }
}
