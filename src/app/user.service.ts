import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { User } from './user';

@Injectable()
export class UserService {
  base = '/api/user';

  private allUsersSource = new BehaviorSubject<Array<User>>([]);
  allUsers = this.allUsersSource.asObservable();

  private currentUserSource = new BehaviorSubject<User>(null);
  currentUser = this.currentUserSource.asObservable();

  constructor(
    private http: Http,
  ) {}

  changeUsers(allUsers: Array<User>) {
    this.allUsersSource.next(allUsers);
  }

  changeCurrentUser(currentUser: User) {
    this.currentUserSource.next(currentUser);
  }

  getCurrentUser(): Promise<User> {
    return this.http.get(`${ this.base}`)
      .map(response => response.json())
      .toPromise();
  }

  getAllUsers(): void {
    this.http.get(`${ this.base}/list`)
      .map(response => response.json())
      .toPromise().then(users => {
        this.changeUsers(users);
      });
  }

  registerLogin(user: User): Promise<User> {
    return this.http.post(`${ this.base}`, user)
      .map(response => response.json())
      .toPromise();
  }

  logout(): Promise<Boolean> {
    return this.http.delete(`${ this.base}`)
      .map(response => response.json())
      .toPromise();
  }

}
