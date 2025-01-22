import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'add-task',
    component: AddTaskComponent,
  },
  {
    path: 'edit-task/:id',
    component: EditTaskComponent,
  },
];
