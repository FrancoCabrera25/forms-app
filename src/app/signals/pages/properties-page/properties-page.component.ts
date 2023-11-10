import { Component, computed, signal } from '@angular/core';
import { User } from '../../service/user.service';

@Component({
  templateUrl: './properties-page.component.html',
  styleUrls: ['./properties-page.component.scss'],
})
export class PropertiesPageComponent {
  public user = signal<User>({
    id: 1,
    email: 'cabrera.franco@ouytlon',
    first_name: 'frnaco',
    last_name: 'cabrera',
    avatar: 'dldd',
  });

  public fullName = computed<string>(() => {
    if (!this.user()) return 'Usuario no encontrado';

    return `${this.user()?.first_name} ${this.user()?.last_name}`;
  });

  public onFieldUpdated(field: string, value: string) {
      //this.user.mutate()
  }
}
