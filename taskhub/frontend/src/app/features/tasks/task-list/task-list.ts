import { Component } from '@angular/core';
import { TaskService } from '../../../core/task.service';
import { Task } from '../../../shared/task.model';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-task-list',
	standalone: true,
	imports: [CommonModule, RouterLink],
	templateUrl: './task-list.html',
	styleUrls: ['./task-list.scss']
})
export class TaskList {
	constructor(public taskService: TaskService, private router: Router) {
		this.taskService.loadTasks();
	}

	toggleCompleted(task: Task) {
		const updated = {...task, completed: !task.completed };
		this.taskService.updateTask(task.id!, updated).subscribe(() => {
			task.completed = !task.completed;
			this.taskService.tasks.update(tasks =>
				tasks.map(t => t.id === updated.id ? updated : t));
			this.router.navigate(['/dashboard']);
		});
	}

	deleteTask(id: number) {
		this.taskService.deleteTask(id).subscribe(() => {
			const updatedTasks = this.taskService.tasks().filter(t => t.id != id);
			this.taskService.tasks.set(updatedTasks);
			this.router.navigate(['/dashboard']);
		});
	}
}
