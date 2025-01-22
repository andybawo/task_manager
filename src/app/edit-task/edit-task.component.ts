import { Component, OnInit } from '@angular/core';
import { Task } from '../model/class/task';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-edit-task',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css',
})
export class EditTaskComponent implements OnInit {
  taskObj: Task = new Task();
  taskList: Task[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Fetch the task list from localStorage
    const localData = localStorage.getItem('taskComp');
    if (localData != null) {
      this.taskList = JSON.parse(localData);
    }

    // Find the task by taskId
    const taskId = Number(this.route.snapshot.paramMap.get('id'));
    this.taskObj =
      this.taskList.find((task) => task.taskId === taskId) || new Task();
  }

  onUpdate() {
    const index = this.taskList.findIndex(
      (task) => task.taskId === this.taskObj.taskId
    );
    if (index !== -1) {
      this.taskList[index] = this.taskObj;
      localStorage.setItem('taskComp', JSON.stringify(this.taskList));
    }
    this.router.navigate(['/home']);
  }
  onEdit(taskId: number): void {
    this.router.navigate(['/edit-task', taskId]);
  }
}
