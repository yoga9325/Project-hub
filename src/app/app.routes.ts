import { Routes } from '@angular/router';
import { GetAllUsersComponent } from './pages/get-all-users/get-all-users.component';
import { HomeComponent } from './pages/home/home.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AllProjectsComponent } from './pages/all-projects/all-projects.component';
import { GetProjectByIdComponent } from './pages/get-project-by-id/get-project-by-id.component';

export const routes: Routes = [
     {path: 'getUsers', component: GetAllUsersComponent},
     {path: 'home', component: HomeComponent },
     {path: 'addUser', component: AddUserComponent},
     {path: 'allProjects', component:AllProjectsComponent},
     {path: 'getProject/:id', component: GetProjectByIdComponent},  
     {path: '', redirectTo: '/home' ,pathMatch: 'full'},
     {path: '**', component: PageNotFoundComponent}

];
