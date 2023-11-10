import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

export interface UserResponse {
  data: User;
  support: Support;
}

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
export interface Support {
  url: string;
  text: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'https://reqres.in/api/users';

  public getUserById(id: number): Observable<User> {
    return this.http
      .get<UserResponse>(`${this.baseUrl}/${id}`)
      .pipe(map((response) => response.data));
  }
}
