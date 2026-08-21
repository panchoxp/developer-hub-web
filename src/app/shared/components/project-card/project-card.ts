import { Component, input } from '@angular/core';
import { Project } from '../../../core/models/project';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  project = input.required<Project>();
 }
