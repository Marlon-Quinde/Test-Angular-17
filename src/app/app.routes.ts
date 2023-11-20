import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./modules/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
    children: [
      {
        path: 'change-detection',
        title: 'Change Detection',
        loadComponent: () =>
          import(
            './modules/dashboard/pages/change-detection/change-detection.component'
          ),
      },
      {
        path: 'control-flow',
        title: 'Control Flow',
        loadComponent: () =>
          import(
            './modules/dashboard/pages/control-flow/control-flow.component'
          ),
      },
      {
        path: 'defer-option',
        title: 'Defer-Option',
        loadComponent: () =>
          import(
            './modules/dashboard/pages/defer-options/defer-options.component'
          ),
      },
      {
        path: 'defer-views',
        title: 'Defer Views+',
        loadComponent: () =>
          import('./modules/dashboard/pages/defer-views/defer-views.component'),
      },
      {
        path: 'user/:id',
        title: 'User',
        loadComponent: () =>
          import('./modules/dashboard/pages/user/user.component'),
      },
      {
        path: 'user-list',
        title: 'User List',
        loadComponent: () =>
          import('./modules/dashboard/pages/users/users.component'),
      },
      {
        path: 'view-transition',
        title: 'View Transition',
        loadComponent: () =>
          import(
            './modules/dashboard/pages/view-transition/view-transition.component'
          ),
      },
      {
        path: '',
        redirectTo: 'control-flow',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
];
