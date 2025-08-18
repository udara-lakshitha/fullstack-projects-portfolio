import { Component } from '@angular/core';
import { TaskService } from '../../../core/task.service';
import { Task } from '../../../shared/task.mdel';

@Component({
	selector: 'app-task-list',
	standalone: true,
	templateUrl: './task-list.html',
	styleUrl: './task-list.scss'
})
export class TaskList {
	constructor(public taskService: TaskService) {
		this.taskService.loadTasks();
	}

	toggleCompleted(task: Task) {
		const updated = {...task, completed: !task.completed };
		this.taskService.updateTask(task.id!, updated).subscribe(() => {
			task.completed = !task.completed;
		});
	}

	deleteTask(id: number) {
		this.taskService.deleteTask(id).subscribe(() => {
			const updatedTasks = this.taskService.tasks().filter(t => t.id != id);
			this.taskService.tasks.set(updatedTasks);
		});
	}
}
