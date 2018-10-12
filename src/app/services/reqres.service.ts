import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PagedUserList } from '../model/users';

// Provided In specifies in which module Service is beign used
@Injectable({
  providedIn: 'root',
})
export class ReqResService {
  baseApiUrl = 'https://reqres.in/';

  constructor(private http: HttpClient) {
  }

  getUsers(page: number): Observable<PagedUserList> {
      return this.http.get(this.baseApiUrl + 'api/users?page=' + page) as Observable<PagedUserList>;
  }

}
