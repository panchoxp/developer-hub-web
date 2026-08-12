import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { About } from './features/about/about';
import { Projects } from './features/projects/projects';
import { Contact } from './features/contact/contact';
import { Skills } from './features/skills/skills';
import { Blog } from './features/blog/blog';
import { Experience } from './features/experience/experience';

export const routes: Routes = [
    {path: 'home', component: Home},
    {path: 'about', component: About},
    {path: 'skills', component: Skills},
    {path: 'projects', component: Projects },
    {path: 'experience', component: Experience },
    {path: 'blog', component: Blog },
    {path: 'contact', component: Contact },

    {path: '', redirectTo: 'home', pathMatch: 'full'},
];
