import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './home/home.component';
import { AddTaskComponent } from './pages/add-task/add-task.component';
import { CompletedTasksComponent } from './pages/completed-tasks/completed-tasks.component';
import { ListOfTasksComponent } from './pages/list-of-tasks/list-of-tasks.component';
import { PendingTasksComponent } from './pages/pending-tasks/pending-tasks.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'add-task', component: AddTaskComponent},
  { path: 'list-task', component: ListOfTasksComponent},
  { path: 'pending-task', component: PendingTasksComponent},
  { path: 'completed-task', component: CompletedTasksComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
