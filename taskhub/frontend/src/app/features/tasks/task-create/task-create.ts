import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TaskService } from '../../../core/task.service';
import { Task } from '../../../shared/task.model';
import { Router } from '@angular/router';

@Component({
	selector: 'app-task-create',
	standalone: true,
	imports: [ReactiveFormsModule],
	templateUrl: './task-create.html',
	styleUrls: ['./task-create.scss']
})
export class TaskCreate {
	taskForm: FormGroup;

	constructor(private fb:FormBuilder, private taskService: TaskService, private router: Router) {
		this.taskForm = fb.group({
			title: [''],
			description: ['']
		});
	}

	createTask() {
		const task: Task = this.taskForm.value;
		this.taskService.createTask(task).subscribe(newTask => {
			this.taskService.tasks.update(tasks => [...tasks, newTask]);
			this.taskForm.reset();
			this.router.navigate(['/dashboard']);
		});
	}
}
