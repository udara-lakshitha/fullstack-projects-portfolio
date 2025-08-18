import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../shared/task.mdel';

@Injectable({
  	providedIn: 'root'
})
export class TaskService {
	private apiUrl = 'http://localhost:8080/api/tasks';

	tasks = signal<Task[]>([]);
	loading = signal<boolean>(false);

	constructor(private http: HttpClient) {}

	loadTasks() {
		this.loading.set(true);
		this.http.get<Task[]>(this.apiUrl).subscribe(data => {
			this.tasks.set(data);
			this.loading.set(false);
		});
	}

	getTask(id: number): Observable<Task> {
		return this.http.get<Task>(`${this.apiUrl}/${id}`);
	}

	createTask(task: Task): Observable<Task> {
		return this.http.post<Task>(this.apiUrl, task);
	}

	updateTask(id: number, task: Task): Observable<Task> {
		return this.http.put<Task>(`${this.apiUrl}/${id}`, task);
	}

	deleteTask(id: number): Observable<void> {
		return this.http.delete<void>(`${this.apiUrl}/${id}`);
	}
}
