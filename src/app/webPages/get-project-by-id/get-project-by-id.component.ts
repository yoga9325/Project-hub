import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { ActivatedRoute } from '@angular/router';
import { ProjectHubService } from '../../services/project-hub.service';
import { GetAllProjects } from '../../contract/get-all-projects';

@Component({
  selector: 'app-get-project-by-id',
  standalone: true,
  imports: [],
  templateUrl: './get-project-by-id.component.html',
  styleUrl: './get-project-by-id.component.css'
})
export class GetProjectByIdComponent {

  constructor(private route: ActivatedRoute,private _http:ProjectHubService) {}

  public project: GetAllProjects | undefined ;

  

ngOnInit()
{
  const projectId = this.route.snapshot.paramMap.get('id');
 
  this._http.getProjectById(projectId).subscribe({
    next: (data) => {
      this.project = data;
      console.log('getting project by id:', this.project);  // testing this method to data get or not  // end of next block   // start of subscribe method   // start of ngOnInit method   // start of class definition   // start of file   // start of script   // start of next block   // start of subscribe method
    },
    error: (error) => {
      console.error('Error:', error);
    }
  });
  // console.log(projectId);
}

}
