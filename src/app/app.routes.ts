import { Routes } from '@angular/router';
import { GetAllUsersComponent } from './webPages/get-all-users/get-all-users.component';
import { HomeComponent } from './webPages/home/home.component';
import { AddUserComponent } from './webPages/add-user/add-user.component';
import { PageNotFoundComponent } from './webPages/page-not-found/page-not-found.component';
import { AllProjectsComponent } from './webPages/all-projects/all-projects.component';


export const routes: Routes = [
     { path: 'getUsers', component: GetAllUsersComponent },
     { path: 'home', component: HomeComponent },
     { path: 'addUser', component: AddUserComponent },
     { path: 'allProjects', component: AllProjectsComponent },

     { path: '', redirectTo: '/home', pathMatch: 'full' },
     { path: '**', component: PageNotFoundComponent }

];
