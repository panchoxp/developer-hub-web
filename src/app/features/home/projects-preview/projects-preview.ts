import { Component } from '@angular/core';
import { Project } from '../../../core/models/project';
import { SectionHeading } from '../../../shared/components/section-heading/section-heading';
import { ProjectCard } from '../../../shared/components/project-card/project-card';
import {RouterLink} from "@angular/router";
@Component({
  selector: 'app-projects-preview',
  standalone: true,
  imports: [
    SectionHeading,
    ProjectCard, RouterLink
  ],
  templateUrl: './projects-preview.html',
  styleUrl: './projects-preview.css'
})
export class ProjectsPreview {

  projects: Project[] = [
    {
      id: 'developer-hub',
      title: 'Developer Hub',
      description:
        'Portafolio personal desarrollado con Angular y TypeScript.',
      technologies: [
        'Angular',
        'TypeScript',
        'Bootstrap'
      ],
      image: 'assets/projects/developer-hub.webp',
      featured: true
    }
  ];

}