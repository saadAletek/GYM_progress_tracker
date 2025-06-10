import { Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path:'log-in',
        component : SignInComponent
    },
    {
        path:'sign-up',
        component : SignUpComponent
    },
    {
        path : '',
        component : HomeComponent
    }
];
