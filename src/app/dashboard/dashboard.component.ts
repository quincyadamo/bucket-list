import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { BucketService } from '../bucket.service';
import { User } from '../user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users: Array<User> = [];

  constructor(
    private userService: UserService,
    private bucketService: BucketService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userService.getCurrentUser().then((user) => {
      this.userService.changeCurrentUser(user);
      this.userService.getAllUsers();
      this.bucketService.getBuckets();

      console.log('User Logged in');
    }).catch( () => {
      this.router.navigate(['/']);
    });

  }

  logout(): void {
    this.userService.logout().then(() => {
      this.userService.changeUsers([]);
      this.userService.changeCurrentUser(null);
      this.bucketService.changeBuckets([]);
      this.router.navigate(['/']);
    });
  }

}
