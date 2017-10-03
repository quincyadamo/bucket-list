import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  user: User = new User();
  errorMessages: string[] = [];
  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userService.logout();
  }

  registerLogin() {
    this.userService.registerLogin(this.user)
      .then((user) => {
        console.log('DASHBAORD!');
        this.router.navigate(['/dashboard']);
    }).catch(err => console.log(err));
  }



  handleErrors(errors: string[] | Error): void {
    this.errorMessages = Array.isArray(errors) ? errors : [errors.message];
  }

}

