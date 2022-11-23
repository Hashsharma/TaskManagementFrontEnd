import { Component } from '@angular/core';
import { first } from 'rxjs';
import { TaskModel } from 'src/models/tasks';
import { TaskserviceService } from 'src/services/userservices/taskservice.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

/**
 * @title Basic use of `<table mat-table>`
 */

@Component({
  selector: 'app-list-of-tasks',
  templateUrl: './list-of-tasks.component.html',
  styleUrls: ['./list-of-tasks.component.scss'],
})
export class ListOfTasksComponent {
  displayedColumns: string[] = [
    'serial',
    'title',
    'description',
    'date',
    'time',
    'actions',
    
  ];
  dataSource = ELEMENT_DATA;
  taskPendingList: any;
  taskData: TaskModel = <TaskModel>{};

  constructor(private taskService: TaskserviceService) {}

  ngOnInit() {
    this.getAllTasks();
  }

  getAllTasks() {
    this.taskService.getAllTasks().subscribe((res: any) => {
      this.taskPendingList = res;
    });
  }

  changeTaskStatus(statusId: any) {
    // 0 Pending, 1 Completed, 2 Deleted Task
    if (statusId == 0) {
      return 'green';
    } else if (statusId == 1) {
      return 'blue';
    } else {
      return 'red';
    }
  }

  deleteTask(taskRID: any, userRID: any) {
    this.taskData.userRID = userRID;
    this.taskData.taskRID = taskRID;

    this.taskService
      .deleteTask(this.taskData)
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
