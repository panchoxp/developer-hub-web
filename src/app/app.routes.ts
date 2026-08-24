import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { ProjectList } from './features/projects/project-list/project-list'; 
import { ProjectDetailComponent } from './features/projects/project-detail/project-detail';
export const routes: Routes = [
    {path: 'home', component: Home},
    { path: 'projects', component: ProjectList },
    { path: 'projects/:id', component: ProjectDetailComponent  }, 
    {path: '', redirectTo: 'home', pathMatch: 'full'},
];
