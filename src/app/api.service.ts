import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../environments/environment';

@Injectable()
export class ApiService{
    messages = [];
    users = [];
    path = environment.path;

    constructor( private http: HttpClient) {}

    getMessages(userId): void {
        this.http.get<any>(this.path + '/posts/' + userId)
            .subscribe((res: any) => {
                this.messages = res;
            });
    }

    postMessage(message): void {
        this.http.post(this.path + '/post', message, {responseType: 'text'})
            .subscribe((res: any) => {
            });
    }

    getUsers(): void {
        this.http.get<any>(this.path + '/users')
            .subscribe((res: any) => {
                this.users = res;
            });
    }

    getProfile(id: string): Observable<object> {
        return this.http.get(this.path + '/profile/' + id);
        //    .subscribe((res: any) => {
        //        this.users = res;
        //    });
    }
}
