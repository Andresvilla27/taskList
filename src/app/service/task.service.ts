import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { Task } from '../task';
import {TASKS} from '../mock-task'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTask(): Observable<Task []> {
    const tasks = of (TASKS);
    return tasks
  }
}
