import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ApiService } from './api.service';

@Component({
    selector: 'post',
    template: `
    <mat-card>
    <mat-card-header>
        <mat-card-title><h4>New post</h4></mat-card-title>
    </mat-card-header>
    <mat-card-content>
        <form>
            <mat-form-field class="example-full-width" style="width: 100%">
                <mat-label>Description: </mat-label>
                <textarea [(ngModel)]="postMsg" name="post" matInput placeholder="Type a post:"></textarea>
            </mat-form-field>
            <br>
            <button (click)="post()" mat-raised-button color="primary" type="button">Post</button>
        </form>
    </mat-card-content>
    </mat-card>
    `
})
export class PostComponent{
    constructor(
        private apiService: ApiService,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {}

    postMsg = '';

    post(): void {
        this.apiService.postMessage({msg: this.postMsg});
        console.log(this.activatedRoute.snapshot);
        // this.router.navigate(['/profile/' + this.activatedRoute.snapshot.params.id]);
    }
}
