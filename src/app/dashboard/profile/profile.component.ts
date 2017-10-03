import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../user';
import { Bucket } from '../../bucket';
import { BucketService } from '../../bucket.service';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

  private sub: any;
  private id: String;
  userName: String = '';
  users: Array<User> = [];
  currentUser: User;
  buckets: Array<Bucket> = [];
  userBucketsFinished: Array<Bucket> = [];
  userBucketsNotFinished: Array<Bucket> = [];

  constructor(
    private bucketService: BucketService,
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.bucketService.buckets.subscribe(buckets => this.buckets = buckets);
    this.userService.currentUser.subscribe(user => this.currentUser = user);
    this.userService.allUsers.subscribe(users => this.users = users);

    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];

      this.userName = this.getTaggedNameById(this.id);
      this.userName = this.userName.slice(0, this.userName.length - 3);

      this.buckets.forEach(bucket => {

        if (bucket.owner_id === this.id || bucket.tagged_user_id === this.id) {
          this.addtoCorrectBucketList(bucket);
        }

      });

    });

  }

  addtoCorrectBucketList(bucket: Bucket): void {

    if (bucket.accomplished) {
      this.userBucketsFinished.push(bucket);
    } else if (!bucket.accomplished) {
      this.userBucketsNotFinished.push(bucket);
    }
  }

  getUserName(): String {
    return this.getTaggedNameById(this.id);
  }

  ngOnDestroy() {
    this.userBucketsFinished = [];
    this.userBucketsNotFinished = [];
    this.sub.unsubscribe();
  }

  getName(bucket: Bucket): String {

    if (bucket.tagged_user_id === this.id) {
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
