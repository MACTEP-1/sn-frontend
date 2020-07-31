import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from './api.service';

@Component({
    selector: 'profile',
    template: `
        <mat-card>
            <mat-card-header>
                <mat-card-title>
                    <h4>Profile</h4>
                </mat-card-title>
            </mat-card-header>
            <mat-card-content>
                <mat-nav-list>
                    <mat-list-item>Name: {{profile?.name}}</mat-list-item>
                    <mat-list-item>Email: {{profile?.email}}</mat-list-item>
                    <mat-list-item>Description: {{profile?.description}}</mat-list-item>
                </mat-nav-list>
            </mat-card-content>
        </mat-card>
        <mat-card>
            <mat-card-header>
                <mat-card-title>
                    <h4>Posts</h4>
                </mat-card-title>
            </mat-card-header>
            <mat-card-content>
                <messages></messages>
            </mat-card-content>
        </mat-card>
    `
})
export class ProfileComponent implements OnInit{
    constructor(
        private apiService: ApiService,
        private route: ActivatedRoute
    ) {}

    profile;

    ngOnInit(): void {
        const id = this.route.snapshot.params.id;
        this.apiService.getProfile(id).subscribe(data => {
            this.profile = data;
        });
    }
}
