import { Component } from '@angular/core';
import { first } from 'rxjs';
import { TaskModel } from 'src/models/tasks';
import { TaskserviceService } from 'src/services/userservices/taskservice.service';

@Component({
  selector: 'app-pending-tasks',
  templateUrl: './pending-tasks.component.html',
  styleUrls: ['./pending-tasks.component.scss'],
})
export class PendingTasksComponent {
  displayedColumns: string[] = [
    'serial',
    'title',
    'description',
    'date',
    'time',
    'actions'
  ];

  taskPendingList: any;
  taskData: TaskModel = <TaskModel>{};
  userRID = 1;

  constructor(private taskService: TaskserviceService) {}

  ngOnInit() {
    this.getAllPendingTasks();
  }

  getAllPendingTasks() {
    this.taskService.getAllPendingTasks(this.userRID).subscribe((res: any) => {
      this.taskPendingList = res;
    });
  }

  markAsTaskCompleted(taskRID: any, userRID: any) {
    this.taskData.userRID = userRID;
    this.taskData.taskRID = taskRID;

    this.taskService
      .markTaskCompleted(this.taskData)
      .pipe(first())
      .subscribe(
        (data) => {
          // this.alertService.success('Registration successful', true);
          // this.response = data;
          // this.openDialog(this.response)
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
