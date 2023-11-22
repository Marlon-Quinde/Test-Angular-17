import { Injectable, signal, inject, computed } from '@angular/core';
import type {
  User,
  UserResponse,
  UsersResponse,
} from '../interfaces/req-response.interface';
import { HttpClient } from '@angular/common/http';

import { delay, map } from 'rxjs';

interface State {
  users: User[];
  loading: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private http = inject(HttpClient);

  public users = computed(() => this.#state().users);
  public loading = computed(() => this.#state().loading);

  #state = signal<State>({
    loading: true,
    users: [],
  });
  constructor() {
    // this.http
    //   .get<UsersResponse>('https://reqres.in/api/users')
    //   .pipe(delay(1000))
    //   .subscribe({
    //     next: (res) => {
    //       this.#state.set({
    //         loading: false,
    //         users: res.data,
    //       });
    //     },
    //     error: (err) => {
    //       console.log(err);
    //     },
    //     complete: () => {},
    //   });
  }

  getUserById(id: string) {
    return this.http
      .get<UserResponse>(`https://reqres.in/api/users/${id}`)
      .pipe(
        delay(1000),
        map((res) => res.data)
      );
  }
}
