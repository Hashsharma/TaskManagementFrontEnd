import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModules } from 'src/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './layout/header/header.component'
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './layout/footer/footer.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './home/home.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper'
import { HttpClientModule } from '@angular/common/http';
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';

import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogTemplateComponent } from './components/dialog-template/dialog-template/dialog-template.component';
import { AddTaskComponent } from './pages/add-task/add-task.component';
import { ListOfTasksComponent } from './pages/list-of-tasks/list-of-tasks.component';
import { PendingTasksComponent } from './pages/pending-tasks/pending-tasks.component';
import { CompletedTasksComponent } from './pages/completed-tasks/completed-tasks.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DialogTemplateComponent,
    AddTaskComponent,
    ListOfTasksComponent,    
    PendingTasksComponent,
    CompletedTasksComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModules,
    BrowserAnimationsModule,
    FlexLayoutModule,
    NgxUsefulSwiperModule,
    HttpClientModule,  
    MatTabsModule,
    MatDialogModule,
    MatIconModule,
    ReactiveFormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
