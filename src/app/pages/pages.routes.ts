import { PagesComponent } from './pages.component';

import { Routes, RouterModule } from "@angular/router";


import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';




const pageRoutes: Routes =[
    {path: ''
    
        , component: PagesComponent
        ,children: [
            {path: 'dashboard' , component: DashboardComponent},
            {path: 'progress', component: ProgressComponent},
            {path: 'grafica1', component: Grafica1Component},
            {path: '', redirectTo: '/dashboard', pathMatch: 'full'}    
        ]

    },
    
    
];

export const PAGES_ROUTES =RouterModule.forRoot( pageRoutes, { useHash: true})
