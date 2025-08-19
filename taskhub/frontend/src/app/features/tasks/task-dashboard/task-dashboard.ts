import { AfterViewInit, Component, effect, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../../core/task.service';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
	selector: 'app-task-dashboard',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './task-dashboard.html',
	styleUrls: ['./task-dashboard.scss']
})
export class TaskDashboard implements AfterViewInit {

	@ViewChild('taskChart') taskChartRef!: ElementRef<HTMLCanvasElement>;

	totalTasks = 0;
	completedTasks = 0;
	pendingTasks = 0;

	chart: Chart | undefined;

	constructor(public taskService: TaskService) {
		effect(() => {
			const tasks = this.taskService.tasks();
			this.totalTasks = tasks.length;
			this.completedTasks = tasks.filter(t => t.completed).length;
			this.pendingTasks = this.totalTasks - this.completedTasks;
			if (this.taskChartRef?.nativeElement && tasks.length > 0) {
				this.renderChart();
			}
		});
	}

	ngAfterViewInit(): void {
		this.taskService.loadTasks();
	}

	renderChart() {
		if (!this.taskChartRef?.nativeElement) return;
		if (this.chart) this.chart.destroy();
		this.chart = new Chart(this.taskChartRef.nativeElement, {
			type: 'doughnut',
			data: {
				labels: ['Completed', 'Pending'],
				datasets: [{
					data: [this.completedTasks, this.pendingTasks],
					backgroundColor: ['#4CAF50', '#F57C00'],
					borderWidth: 1
				}]
			},
			options: {
				responsive: true,
				plugins: { legend: { position: 'bottom' } }
			}
		});
	}
}
