import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { FormsModule } from '@angular/forms';
import { ShowTaskComponent } from './show-task/show-task.component';
import { TaskService } from './Services/task.service';
import { SubjectComponent } from './subject/subject.component';

@NgModule({
  declarations: [
    AppComponent,
    NewTaskComponent,
    ShowTaskComponent,
    SubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
