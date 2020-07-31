import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';

@Injectable()
export class AuthService{
    messages = [];
    path = environment.path + '/auth';
    TOKEN_KEY = 'token';

    constructor( private http: HttpClient) {}

    get token(): string{
        return localStorage.getItem(this.TOKEN_KEY);
    }

    get isAuthenticated(): boolean{
        return !!localStorage.getItem(this.TOKEN_KEY);
    }

    logout(): void{
        localStorage.removeItem(this.TOKEN_KEY);
    }

    registerUser(registerData): void {
        this.http.post<any>(this.path + '/register', registerData)
            .subscribe((res: any) => {
                localStorage.setItem(this.TOKEN_KEY, res.token);
            });
    }

    loginUser(loginData): void {
        this.http.post<any>(this.path + '/login', loginData)
            .subscribe((res: any) => {
                console.log(res);
                localStorage.setItem(this.TOKEN_KEY, res.token);
            });
    }
}
