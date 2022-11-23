import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from 'src/services/userservices/user.service';
import { first } from 'rxjs';
import { TaskserviceService } from 'src/services/userservices/taskservice.service';
import { DialogTemplateComponent } from 'src/app/components/dialog-template/dialog-template/dialog-template.component';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {

  taskForm: FormGroup | any;
  loading = false;
  submitted = false;
  response : any;

  constructor(
    private formBuilder: FormBuilder,
    private taskService: TaskserviceService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.taskForm = this.formBuilder.group({
      taskTitle: ['', Validators.required],
      taskDescription: ['', Validators.required],
      userRID: localStorage.getItem('userRID')
    });
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.taskForm.invalid) {
      return;
    }

    console.log(this.taskForm.value)
    this.taskService
      .createTask(this.taskForm.value)
      .pipe(first())
      .subscribe(
        (data) => {
          // this.alertService.success('Registration successful', true);
          console.log(data.toString())
          this.resetForm()
          this.response = data;         
          this.openDialog(this.response) 
        },
        (error) => {
          console.log(error)
        }
      );
  }

  openDialog(messages:String) {
    this.dialog.open(DialogTemplateComponent, {
      height: '40%',
      width: '40%',
      data: {
        title: 'Success',
        message: messages
      },
    });
  }


  resetForm() {
    this.taskForm.reset();
    this.taskForm.setErrors(null); // could be removed
    this.taskForm.updateValueAndValidity();
  } 
}
