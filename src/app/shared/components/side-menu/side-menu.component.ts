import { Component } from '@angular/core';

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
  public reactiveMenu: MenuItem[] = [
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
  ];

  public authMenu: MenuItem[] = [
    {
      title: 'Registro',
      route: './auth',
    },
  ];
}
