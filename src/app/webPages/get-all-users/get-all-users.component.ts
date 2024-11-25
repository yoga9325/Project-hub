import { Component } from '@angular/core';
import { ProjectHubService } from '../../services/project-hub.service';
import { GetAllUsers } from '../../contract/get-all-users';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-get-all-users',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './get-all-users.component.html',
  styleUrl: './get-all-users.component.css'
})
export class GetAllUsersComponent {

  constructor(private _http: ProjectHubService){}
  public getAllUsers:GetAllUsers[] =[];

  ngOnInit(): void {
    this._http.getAllUsers().subscribe({
      next: (data:any)=>{
          // log the received data to the console   // end of next block   // start of subscribe method   // start of ngOnInit method   // start of class definition   // start of file   // start of script   // start of error block   // start of subscribe method   // start of ngOnInit method   // start of class definition   // start of file   // start of script   // start of next block   // start of subscribe method
        this.getAllUsers = data.data;
        // console.log('getting all Data:', this.getAllUsers); // testing this method to data get or not 
      },
      error: (error)=>{ 
        console.error('Error:', error);
      }  // end of next and error block   // end of subscribe method   // end of ngOnInit method   // end of class definition   // end of file   // end of script
    });
  }
  
}
