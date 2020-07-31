import { Component } from '@angular/core';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar>
      <button mat-raised-button routerLink="/">PS Social</button>
      <button style="margin-left: 20px" mat-raised-button color="primary" routerLink="/users">Users</button>
      <span style="flex: 1 1 auto"></span>
      <button *ngIf="!authService.isAuthenticated" style="margin-right: 20px" mat-raised-button color="primary" routerLink="/login">Login</button>
      <button *ngIf="authService.isAuthenticated" mat-raised-button color="primary" (click)="authService.logout()">Logout</button>
      <button *ngIf="!authService.isAuthenticated" mat-raised-button color="primary" routerLink="/register">Register</button>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `
})
export class AppComponent{
  constructor(public authService: AuthService) {}
  title = 'My app';
}
