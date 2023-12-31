import { Component, signal } from '@angular/core';

interface MenuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {

  public reactiveMenu = signal<MenuItem[]>([
    {
      title: 'Basicos',
      route: './reactive/basic',
    },
    {
      title: 'Dinamico',
      route: './reactive/dynamic',
    },
    {
      title: 'Switches',
      route: './reactive/switches',
    },
    {
      title: 'Selectores',
      route: './selectores',
    },
  ]);
  // public reactiveMenu: MenuItem[] = [
  //   {
  //     title: 'Basicos',
  //     route: './reactive/basic',
  //   },
  //   {
  //     title: 'Dinamico',
  //     route: './reactive/dynamic',
  //   },
  //   {
  //     title: 'Switches',
  //     route: './reactive/switches',
  //   },
  //   {
  //     title: 'Selectores',
  //     route: './selectores',
  //   },
  // ];

  public authMenu: MenuItem[] = [
    {
      title: 'Registro',
      route: './auth',
    },
  ];
}
