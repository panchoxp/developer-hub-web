import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { About } from './about/about';
import { Skills } from './skills/skills';
import { ProjectsPreview } from './projects-preview/projects-preview';
@Component({
  selector: 'app-home',
  imports: [Hero, About, Skills, ProjectsPreview],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
