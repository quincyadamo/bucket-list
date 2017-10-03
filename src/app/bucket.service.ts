import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Bucket } from './bucket';

@Injectable()
export class BucketService {

  base = '/api/bucket';

  private bucketsSource = new BehaviorSubject<Array<Bucket>>([]);
  buckets = this.bucketsSource.asObservable();

  constructor(
    private http: Http,
  ) { }

  changeBuckets(buckets: Array<Bucket>) {
    this.bucketsSource.next(buckets);
  }

  checkBucket(id: String): Promise<Bucket> {
    return this.http.put(`${this.base}/${id}`, id)
      .map(response => response.json())
      .toPromise();
  }

  createBucket(bucket: Bucket): Promise<Bucket> {
    return this.http.post(`${this.base}`, bucket)
      .map(response => response.json())
      .toPromise();
  }

  getBuckets(): void {
    this.http.get(`${this.base}`)
      .map(response => response.json())
      .toPromise().then(buckets => {
        this.changeBuckets(buckets);
      });
  }

}
