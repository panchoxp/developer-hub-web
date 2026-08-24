import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProjectService } from '../../../core/services/project';
import { ProjectDetail } from '../../../core/models/project-detail';
import { SectionHeading } from '../../../shared/components/section-heading/section-heading';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [SectionHeading],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css'
})
export class ProjectDetailComponent implements OnInit {

  project?: ProjectDetail;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) { }


  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    if (!id) {
      return;
    }

    this.project = this.projectService.getProjectById(id);

  }
  getStatusLabel(status: string): string {

    switch (status) {

      case 'completed':
        return 'Completed';

      case 'in-development':
        return 'In development';

      case 'planned':
        return 'Planned';

      default:
        return 'Unknown';

    }

  }

}