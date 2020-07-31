import { Component, OnInit } from '@angular/core';

import { ApiService } from './api.service';

@Component({
  selector: 'users',
  template: `
    <div *ngFor="let user of apiService.users; let i = index">
        <mat-card-header>
            <mat-card-title>User {{i+1}}</mat-card-title>
        </mat-card-header>
        <mat-card [routerLink]="['/profile', user._id]" style="cursor: pointer">{{user.name}}</mat-card>
    </div>
  `
})
export class UsersComponent implements OnInit{
  constructor(public apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getUsers();
  }
}
