import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from './task.service';
import { Task } from './task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class TaskComponent {
  taskService = inject(TaskService);
  tasks: Task[] = [];
  newTask: Task = { title: '', description: '', dueDate: '', status: 'pending' };

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe((data) => {
      this.tasks = data;
    });
  }

  addTask() {
    this.taskService.addTask(this.newTask).subscribe(() => {
      this.newTask = { title: '', description: '', dueDate: '', status: 'pending' };
      this.loadTasks();
    });
  }

  deleteTask(id?: string) {
    if (!id) return;
    this.taskService.deleteTask(id).subscribe(() => this.loadTasks());
  }
}