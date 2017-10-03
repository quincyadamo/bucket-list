import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BucketService } from '../../bucket.service';
import { UserService } from '../../user.service';

import { User } from '../../user';
import { Bucket } from '../../bucket';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  bucket: Bucket = new Bucket();
  buckets: Array<Bucket> = [];
  users: Array<User> = [];
  currentUser: User;
  bucketError: String = '';

  constructor(
    private bucketService: BucketService,
    private userService: UserService,
    private router: Router
  ) {
    this.bucketError = '';
  }

  ngOnInit() {
    this.userService.allUsers.subscribe(users => this.users = users);
    this.userService.currentUser.subscribe(user => this.currentUser = user);
    this.bucketService.buckets.subscribe(buckets => {
      buckets.forEach(bucket => {
        if (bucket.owner_id === this.currentUser._id || bucket.tagged_user_id === this.currentUser._id) {
          this.buckets.push(bucket);
        }
      });
    });

  }

  getUserName(): String {
    let result;
    this.users.forEach(user => {
      if (user._id === this.currentUser._id) {
        result = user.name;
      }
    });
    return result;
  }

  getOtherUsers(): Array<User> {
    const temp = [];
    this.users.forEach((user) => {
      if (user._id !== this.currentUser._id) {
        temp.push(user);
      }
    });

    return temp;
  }

  checkBucket(id: String): void {
    console.log('check box');
    this.bucketService.checkBucket(id)
      .then((bucket) => {
        this.buckets.forEach((item, index) => {
          if (item._id === id) {
            this.buckets[index] = bucket;
          }
        });
      }).catch(err => {
        console.log(err);
      });
  }

  createBucket(form): void {
    this.bucketError = '';
    this.bucketService.createBucket(this.bucket)
      .then((bucket) => {
        form.reset();
        const temp = this.buckets.concat(bucket);
        this.buckets = [];
        this.bucketService.changeBuckets(temp);
      }).catch(err => {
        console.log(err);
        this.bucketError = 'Something went wrong. Please verify that the title is >= 5 characters and the description >= 10 characters. ';
      });
  }

  getName(bucket: Bucket): String {

    if (bucket.owner_id === this.currentUser._id) {
      return this.getTaggedNameById(bucket.tagged_user_id);
    }

    if (bucket.tagged_user_id === this.currentUser._id) {
      return this.getTaggedNameById(bucket.owner_id);
    }

    return '';

  }

  getTaggedNameById(id: String): String {

    let result = '';
    this.users.forEach(user => {
      if (user._id === id) {
        result = user.name + ' | ';
      }

    });
    return result;
  }

}
