import { Routes } from '@angular/router';
import { TaskDashboard } from './features/tasks/task-dashboard/task-dashboard';
import { TaskList } from './features/tasks/task-list/task-list';
import { TaskCreate } from './features/tasks/task-create/task-create';
import { TaskEdit } from './features/tasks/task-edit/task-edit';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

    { path: 'dashboard', component: TaskDashboard },
    { path: 'tasks', component: TaskList },
    { path: 'tasks/create', component: TaskCreate },
    { path: 'tasks/:id/edit', component: TaskEdit }
];
