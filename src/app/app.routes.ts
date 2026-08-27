import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { ProjectDetailComponent } from './features/projects/project-detail/project-detail';
export const routes: Routes = [
    {path: 'home', component: Home}, 
    { path: 'projects/:id', component: ProjectDetailComponent  }, 
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    
];
