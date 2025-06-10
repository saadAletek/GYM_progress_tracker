import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-in',
  imports: [CommonModule ,RouterModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  // username = '';
  // password = '';

  // constructor(private authService: AuthService, private router: Router) {}

  // onSubmit() {
  //   if (this.authService.login(this.username, this.password)) {
  //     this.router.navigate(['/dashboard']);
  //   } else {
  //     alert('Invalid credentials');
  //   }
  // }

}
