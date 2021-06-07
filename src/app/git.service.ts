import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IGitTrending } from './IGitTrending';

@Injectable({
  providedIn: 'root',
})
export class GitService {
  readonly httpHeader: any = {
    headers: [new HttpHeaders({ 'Content-Type': 'application/json' })],
  };

  constructor(private http: HttpClient) {}

  getTopTrending(): Observable<IGitTrending[]> {
    return this.http
      .get(
        'https://api.trending-github.com/github/repositories',
        this.httpHeader
      )
      .pipe(map((response: any) => response as IGitTrending[]));
  }
}
