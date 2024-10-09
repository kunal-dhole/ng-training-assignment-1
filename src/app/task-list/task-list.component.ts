import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: any[] = [];
  filteredTasks: any[] = [];
  currentPage = 1;
  pageSize = 4; // Number of tasks per page
  taskToDelete: any | null = null; 
  totalPages : any;
  searchTerm: string = '';

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    // Add a delay of 2 seconds (2000 milliseconds) before executing the task retrieval
    setTimeout(() => {
      this.taskService.getTasks().subscribe((tasks: any[]) => {
        this.tasks = tasks;
        this.totalPages = Math.ceil(this.tasks.length / this.pageSize);
        this.updateFilteredTasks();
      });
    }, 2000);  // Delay in milliseconds (e.g., 2000ms = 2 seconds)
  }
  

  updateFilteredTasks(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    this.filteredTasks = this.tasks.slice(startIndex, startIndex + this.pageSize);
  }

  onSearchClick(): void {
    this.filterTasks();
  }

  filterTasks(): void {
    if (this.searchTerm) {
      this.filteredTasks = this.tasks.filter(task =>
        task.assignedTo.toLowerCase().includes(this.searchTerm.toLowerCase()) 
        ); 
    } else {
      this.updateFilteredTasks();
    }
    this.totalPages = Math.ceil(this.filteredTasks.length / this.pageSize);
    this.currentPage = 1; // Reset to first page
  }

 

  editTask(id: number): void {
    this.router.navigate(['/edit', id]);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateFilteredTasks();
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateFilteredTasks();
    }
  }

  firstPage(): void {
    this.currentPage = 1;
    this.updateFilteredTasks();
  }

  lastPage(): void {
    this.currentPage = this.totalPages;
    this.updateFilteredTasks();
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.updateFilteredTasks();
  }



  //Show confirmation modal
  confirmDelete(task: any): void {
    this.taskToDelete = task;  // Set the task to be deleted
  }

  // Delete the task
  deleteTask(): void {
    if (this.taskToDelete) {
      this.taskService.deleteTask(this.taskToDelete.id).subscribe(() => {
        this.getTasks();  // Refresh task list
        this.taskToDelete = null;  // Reset the modal
      });
    }
  }

  // Cancel deletion
  cancelDelete(): void {
    this.taskToDelete = null;  // Close the modal
  }



}
