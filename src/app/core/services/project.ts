import { Injectable } from '@angular/core';
import { PROJECT_DETAILS } from '../data/projects.data';
import { ProjectDetail } from '../models/project-detail';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projects: ProjectDetail[] = PROJECT_DETAILS;


  getProjects(): ProjectDetail[] {

    return this.projects;

  }


  getProjectById(id: string): ProjectDetail | undefined {

    return this.projects.find(
      project => project.id === id
    );

  }

}