import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  login(username: string, password: string): boolean {
    // Replace this with real API call and validation
    if (username === 'validUser' && password === 'validPassword') {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      return true;
    }
    return false;
  }

  autoLogin(): boolean {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');

    if (username && password) {
      // In real app, verify credentials via API call
      return this.login(username, password);
    }
    return false;
  }

  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    this.router.navigate(['/log-in']);
  }
}