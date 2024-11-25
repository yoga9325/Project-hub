import { Component } from '@angular/core';
import { GetAllProjects } from '../../contract/get-all-projects';
import { ProjectHubService } from '../../services/project-hub.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-all-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-projects.component.html',
  styleUrl: './all-projects.component.css'
})
export class AllProjectsComponent {
  public view: boolean = false;

  constructor(private _http: ProjectHubService,private router: Router) { }
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

  toggleView(id:any) {
    
    this.router.navigate(['/getProject', id]);
  }
}
