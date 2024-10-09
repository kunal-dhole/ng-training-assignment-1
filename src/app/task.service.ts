import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks = [
    { id: 1, title: 'Task 1', assignedTo: 'User 1', status: 'Completed', dueDate: '2024-10-12', priority: 'Low', comments: 'This task is good' },
    { id: 2, title: 'Task 2', assignedTo: 'User 2', status: 'In Progress', dueDate: '2024-09-14', priority: 'High', comments: 'This task is good' },
    { id: 3, title: 'Task 3', assignedTo: 'User 3', status: 'Not Started', dueDate: '2024-08-18', priority: 'Low', comments: 'This task is good' },
    { id: 4, title: 'Task 4', assignedTo: 'User 4', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
    { id: 4, title: 'Task 5', assignedTo: 'User 5', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
    { id: 4, title: 'Task 5', assignedTo: 'User 6', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
    { id: 4, title: 'Task 5', assignedTo: 'User 7', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
    { id: 4, title: 'Task 5', assignedTo: 'User 8', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
    { id: 4, title: 'Task 5', assignedTo: 'User 9', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
    { id: 4, title: 'Task 5', assignedTo: 'User 10', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
    { id: 4, title: 'Task 5', assignedTo: 'User 11', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
    { id: 4, title: 'Task 5', assignedTo: 'User 12', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
    { id: 4, title: 'Task 5', assignedTo: 'User 13', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
    { id: 4, title: 'Task 5', assignedTo: 'User 14', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
    { id: 4, title: 'Task 5', assignedTo: 'User 15', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
    { id: 4, title: 'Task 5', assignedTo: 'User 16', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
    { id: 4, title: 'Task 5', assignedTo: 'User 17', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
    { id: 4, title: 'Task 5', assignedTo: 'User 18', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
    { id: 4, title: 'Task 5', assignedTo: 'User 19', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
    { id: 4, title: 'Task 5', assignedTo: 'User 20', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
    { id: 4, title: 'Task 5', assignedTo: 'User 21', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
    { id: 4, title: 'Task 5', assignedTo: 'User 22', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
    { id: 4, title: 'Task 5', assignedTo: 'User 23', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
    { id: 4, title: 'Task 5', assignedTo: 'User 24', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
    { id: 4, title: 'Task 5', assignedTo: 'User 25', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
    { id: 4, title: 'Task 5', assignedTo: 'User 26', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
    { id: 4, title: 'Task 5', assignedTo: 'User 27', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
    { id: 4, title: 'Task 5', assignedTo: 'User 28', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
    { id: 4, title: 'Task 5', assignedTo: 'User 29', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
    { id: 4, title: 'Task 5', assignedTo: 'User 30', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
    { id: 4, title: 'Task 5', assignedTo: 'User 31', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
    { id: 4, title: 'Task 5', assignedTo: 'User 32', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
    { id: 4, title: 'Task 5', assignedTo: 'User 33', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
    { id: 4, title: 'Task 5', assignedTo: 'User 34', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
    { id: 4, title: 'Task 5', assignedTo: 'User 35', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
    { id: 4, title: 'Task 5', assignedTo: 'User 36', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
    { id: 4, title: 'Task 5', assignedTo: 'User 37', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
    { id: 4, title: 'Task 5', assignedTo: 'User 38', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
    { id: 4, title: 'Task 5', assignedTo: 'User 39', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
    { id: 4, title: 'Task 5', assignedTo: 'User 40', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
    { id: 4, title: 'Task 5', assignedTo: 'User 41', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
    { id: 4, title: 'Task 5', assignedTo: 'User 42', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
    { id: 4, title: 'Task 5', assignedTo: 'User 43', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
    { id: 4, title: 'Task 5', assignedTo: 'User 44', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
    { id: 4, title: 'Task 5', assignedTo: 'User 45', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
    { id: 4, title: 'Task 5', assignedTo: 'User 46', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
    { id: 4, title: 'Task 5', assignedTo: 'User 47', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
    { id: 4, title: 'Task 5', assignedTo: 'User 48', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
    { id: 4, title: 'Task 5', assignedTo: 'User 49', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
    { id: 4, title: 'Task 5', assignedTo: 'User 50', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
    { id: 4, title: 'Task 5', assignedTo: 'User 51', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
     { id: 4, title: 'Task 5', assignedTo: 'User 52', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
     { id: 4, title: 'Task 5', assignedTo: 'User 53', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
     { id: 4, title: 'Task 5', assignedTo: 'User 54', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
     { id: 4, title: 'Task 5', assignedTo: 'User 55', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
     { id: 4, title: 'Task 5', assignedTo: 'User 56', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
     { id: 4, title: 'Task 5', assignedTo: 'User 57', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
     { id: 4, title: 'Task 5', assignedTo: 'User 58', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
     { id: 4, title: 'Task 5', assignedTo: 'User 59', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
     { id: 4, title: 'Task 5', assignedTo: 'User 60', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
     { id: 4, title: 'Task 5', assignedTo: 'User 61', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
     { id: 4, title: 'Task 5', assignedTo: 'User 62', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
     { id: 4, title: 'Task 5', assignedTo: 'User 63', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
     { id: 4, title: 'Task 5', assignedTo: 'User 64', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
     { id: 4, title: 'Task 5', assignedTo: 'User 65', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
     { id: 4, title: 'Task 5', assignedTo: 'User 66', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
     { id: 4, title: 'Task 5', assignedTo: 'User 67', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
     { id: 4, title: 'Task 5', assignedTo: 'User 68', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
     { id: 4, title: 'Task 5', assignedTo: 'User 69', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
     { id: 4, title: 'Task 5', assignedTo: 'User 70', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
     { id: 4, title: 'Task 5', assignedTo: 'User 71', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
     { id: 4, title: 'Task 5', assignedTo: 'User 72', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
     { id: 4, title: 'Task 5', assignedTo: 'User 73', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
     { id: 4, title: 'Task 5', assignedTo: 'User 74', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
     { id: 4, title: 'Task 5', assignedTo: 'User 75', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
     { id: 4, title: 'Task 5', assignedTo: 'User 76', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
     { id: 4, title: 'Task 5', assignedTo: 'User 77', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
     { id: 4, title: 'Task 5', assignedTo: 'User 78', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
     { id: 4, title: 'Task 5', assignedTo: 'User 79', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
     { id: 4, title: 'Task 5', assignedTo: 'User 80', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
  ];

  constructor(private http: HttpClient) { }

  getTasks(): Observable<any[]> {
    return of(this.tasks).pipe(delay(100)); // Mock API call
  }

  getTaskById(id: number): Observable<any> {
    const task = this.tasks.find(t => t.id === id);
    return of(task).pipe(delay(100)); // Mock API call
  }

  addTask(task: any): Observable<any> {
    task.id = this.tasks.length + 1; // Simple ID assignment
    this.tasks.push(task);
    return of(task).pipe(delay(100)); // Mock API call
  }

  updateTask(updatedTask: any): Observable<any> {
    const index = this.tasks.findIndex(t => t.id === updatedTask.id);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
    }
    return of(updatedTask).pipe(delay(100)); // Mock API call
  }

  deleteTask(id: number): Observable<any> {
    this.tasks = this.tasks.filter(task => task.id !== id);
    return of({ success: true }).pipe(delay(100)); // Mock API call
  }
}
