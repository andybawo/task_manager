import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Task } from '../model/class/task';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  taskList: Task[] = [];
  task: any;

  ngOnInit(): void {
    const localData = localStorage.getItem('taskComp');
    if (localData != null) {
      this.taskList = JSON.parse(localData);
    }
  }

  constructor(private router: Router) {}

  onEdit(taskId: number): void {
    this.router.navigate(['/edit-task', taskId]);
  }

  onDelete(taskId: number): void {
    const isDelete = confirm('Are you sure you want to Delete');
    if (isDelete) {
      const index = this.taskList.findIndex((m) => m.taskId == taskId);
      this.taskList.splice(index, 1);
      localStorage.setItem('taskComp', JSON.stringify(this.taskList));
    }
  }
}
