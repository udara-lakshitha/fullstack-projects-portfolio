import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TaskService } from '../../../core/task.service';
import { Task } from '../../../shared/task.mdel';

@Component({
	selector: 'app-task-create',
	standalone: true,
	imports: [ReactiveFormsModule],
	templateUrl: './task-create.html',
	styleUrl: './task-create.scss'
})
export class TaskCreate {
	taskForm: FormGroup;

	constructor(private fb:FormBuilder, private taskService: TaskService) {
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
		});
	}
}
