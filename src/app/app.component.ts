import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet ,HeaderComponent,SignInComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Progress-tracker';

    constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    const isLoggedIn = this.authService.autoLogin();

    if (!isLoggedIn) {
      // this.router.navigate(['/sign-in']);
    }
  }
}
