import { Project } from './project';

export interface ProjectDetail extends Project {

  overview: {
    whatIsIt: string;
    objective: string;
  };

  architecture: {
    title: string;
    description: string;
    areas: ArchitectureArea[];
  };

  development: DevelopmentStep[];

  learnings: Learning[];

  status: ProjectStatus;
}

export interface ArchitectureArea {

  number: string;

  name: string;

  description: string;

  path: string;
}

export interface DevelopmentStep {

  number: string;

  category: string;

  title: string;

  description: string;
}

export interface Learning {

  number: string;

  title: string;

  description: string;
}

export interface ProjectStatus {

  frontend: ProjectState;

  backend: ProjectState;

  database: ProjectState;

  mobile: ProjectState;
}

export type ProjectState =
  | 'completed'
  | 'in-development'
  | 'planned';