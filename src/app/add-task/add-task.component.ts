import { Component, OnInit } from '@angular/core';
import { Task } from '../model/class/task';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent implements OnInit {
  taskObj: Task = new Task();

  taskList: Task[] = [];
  constructor(private router: Router) {}

  ngOnInit(): void {
    const localData = localStorage.getItem('taskComp');
    if (localData != null) {
      this.taskList = JSON.parse(localData);
    }
  }

  onSave() {
    console.log('Task object before saving:', this.taskObj);
    console.log('Saving task with status:', this.taskObj.taskStatus);
    this.taskObj.taskId = this.taskList.length + 1;
    this.taskList.push(this.taskObj);
    localStorage.setItem('taskComp', JSON.stringify(this.taskList));
    this.router.navigate(['/home']);
  }
}
