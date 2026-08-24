import { Component } from '@angular/core';
import { Project } from '../../../core/models/project';
import { SectionHeading } from '../../../shared/components/section-heading/section-heading';
import { ProjectCard } from '../../../shared/components/project-card/project-card';
import { RouterLink } from "@angular/router";
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
  currentProjectIndex = 0;
  get currentProject(): Project {
    return this.projects[this.currentProjectIndex];
  }
  formatNumber(value: number): string {
    return value.toString().padStart(2, '0');
  }
  nextProject(): void {

    this.currentProjectIndex =
      (this.currentProjectIndex + 1) % this.projects.length;

  }
  previousProject(): void {

    this.currentProjectIndex =
      (this.currentProjectIndex - 1 + this.projects.length)
      % this.projects.length;

  }


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
    },

    {
      id: 'spring-api',
      title: 'Spring API',
      description:
        'API REST desarrollada con Spring Boot y PostgreSQL.',
      technologies: [
        'Java',
        'Spring Boot',
        'PostgreSQL'
      ],
      image: 'assets/projects/spring-api.webp',
      featured: true
    },
    {
      id: 'mobile-app',
      title: 'Mobile App',
      description:
        'Aplicación móvil desarrollada como proyecto experimental.',
      technologies: [
        'React Native',
        'TypeScript'
      ],
      image: 'assets/projects/mobile-app.webp',
      featured: true
    }

  ];

}