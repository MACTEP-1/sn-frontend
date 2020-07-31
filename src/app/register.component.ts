import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
    selector: 'register',
    templateUrl: './register.component.html'
})
export class RegisterComponent{
    constructor(private authService: AuthService, private router: Router) {}
    registerData = {
        email: '',
        pwd: '',
        name: '',
        description: ''
    };

    post(): void {
        this.authService.registerUser(this.registerData);
        this.router.navigate(['']);
    }
}