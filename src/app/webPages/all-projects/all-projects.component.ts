import { Component } from '@angular/core';
import { GetAllProjects } from '../../contract/get-all-projects';
import { ProjectHubService } from '../../services/project-hub.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-all-projects',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './all-projects.component.html',
  styleUrl: './all-projects.component.css'
})
export class AllProjectsComponent {
  public view: boolean = false;

  constructor(private _http: ProjectHubService) { }
  public projects: GetAllProjects[] = [];
  ngOnInit() {
    this._http.getAllProjects().subscribe({
      next: (data) => {
        this.projects = data;

      },
      error: (error) => {
        console.error('Error:', error);
      }  // end of next and error block   // end of subscribe method   // end of ngOnInit method   // end of class definition   // end of file   // end of script
    })
  }

  
}
