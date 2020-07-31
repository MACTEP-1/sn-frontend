import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
    selector: 'login',
    template: `
    <mat-card>
        <mat-card-header>
            <mat-card-title><h4>Login:</h4></mat-card-title>
        </mat-card-header>
        <mat-card-content>
            <form>
                <mat-form-field class="example-full-width">
                    <mat-label>Email: </mat-label>
                    <input [(ngModel)]="loginData.email" name="email" matInput placeholder="Enter email:" type="email">
                </mat-form-field>

                <mat-form-field class="example-full-width">
                    <mat-label>Password: </mat-label>
                    <input [(ngModel)]="loginData.pwd" name="password" matInput placeholder="Enter password:" type="password">
                </mat-form-field>
                <button (click)="post()" mat-raised-button color="primary" type="button">Login</button>
            </form>
        </mat-card-content>
    </mat-card>
`
})

export class LoginComponent{
    constructor(private authService: AuthService, private router: Router) {}
    loginData = {
        email: '',
        pwd: ''
    };

    post(): void {
        this.authService.loginUser(this.loginData);
        this.router.navigate(['']);
    }
}