import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule, BadgeModule, AvatarModule, InputTextModule, RippleModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
      this.items = [
          {
              label: 'Home',
              icon: 'pi pi-home',
              route: '/home',
          },
          {
              label: 'All Users',
              icon: 'pi pi-users',
              route: '/getUsers'
              
          },
          
          {
            label: "Add user",
            icon:   'pi pi-user-plus',
            route: '/addUser'
          },
          {
            label: "All Projects",
            icon: 'pi pi-project-diagram',
            route: '/allProjects'
          },
          {
              label: 'Projects',
              icon: 'pi pi-search',
              items: [
                  {
                      label: 'All Projects',
                      icon: '',
                      route: '/getUsers'
                  },
                  {
                      label: 'Blocks',
                      icon: 'pi pi-server'
                  },
                  {
                      label: 'UI Kit',
                      icon: 'pi pi-pencil'
                  },
                  {
                      separator: true
                  },
                  {
                      label: 'Templates',
                      icon: 'pi pi-palette',
                      items: [
                          {
                              label: 'Apollo',
                              icon: 'pi pi-palette',
                              badge: '2'
                          },
                          {
                              label: 'Ultima',
                              icon: 'pi pi-palette',
                              badge: '3'
                          }
                      ]
                  }
              ]
          },
          {
              label: 'Contact',
              icon: 'pi pi-envelope',
              badge: '3'
          }
      ];
  }

}
