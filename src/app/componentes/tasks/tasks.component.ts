import { Component, OnInit } from '@angular/core';

import { Task } from '../../task';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
 
  
  constructor(
    private taskService: TaskService
    ) { }
  

  ngOnInit(): void {
    this.taskService.getTask().subscribe(task=>
      this.tasks = task)
   
  }

}
