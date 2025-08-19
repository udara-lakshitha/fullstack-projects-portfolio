import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../../core/task.service';
import { Task } from '../../../shared/task.model';

@Component({
  	selector: 'app-task-edit',
  	standalone: true,
  	imports: [ReactiveFormsModule],
  	templateUrl: './task-edit.html',
  	styleUrl: './task-edit.scss'
})
export class TaskEdit implements OnInit {
  	taskForm: FormGroup;
  	taskId!: number;

	constructor(
		private fb: FormBuilder,
    	private taskService: TaskService,
    	private route: ActivatedRoute,
    	private router: Router
	) {
		this.taskForm = this.fb.group({
			title: [''],
			description: [''],
			completed: [false]
    	});
	}

	ngOnInit(): void {
    this.taskId = Number(this.route.snapshot.paramMap.get('id'));
    this.taskService.getTask(this.taskId).subscribe(task => {
      if (task) this.taskForm.setValue({
        title: task.title,
        description: task.description,
        completed: task.completed
      });
    });
  }

  updateTask() {
    const updatedTask: Task = this.taskForm.value;
    this.taskService.updateTask(this.taskId, updatedTask).subscribe(task => {
      this.taskService.tasks.update(tasks =>
        tasks.map(t => (t.id === task.id ? task : t))
      );
      this.router.navigate(['/tasks']);
    });
  }
}
