import { Routes } from '@angular/router';

export const routes: Routes = [
        {
            path:'monumentalhabits',
            loadComponent: ()=> import('./app.component'),
            children:[
                {
                        path:'',
                        title: 'onboarding',
                        loadComponent: () => import('@components/onboarding/onboarding.component')
                },
                {
                        path:'home',
                        title: 'home',
                        loadComponent: () => import('@components/home/home.component')
                },
                {
                        path:'profile',
                        title: 'profile',
                        loadComponent: () => import('@components/profile/profile.component')
                },
                {
                        path:'courses',
                        title: 'courses',
                        loadComponent: () => import('@components/courses/courses.component')
                }
            ]
        },
        {
            path:'',
            redirectTo: '/monumentalhabits',
            pathMatch: 'full'
        }
    ];
