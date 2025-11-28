import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Cours } from './cours/cours';
import { Planning } from './planning/planning';
import { Tarif } from './tarif/tarif';
import { Inscription } from './inscription/inscription';

export const routes: Routes = [
    { path: 'home', component: Home},
    { path: 'cours',component: Cours},
    { path: 'planning',component: Planning},
     { path: 'tarif',component: Tarif},
     { path: 'inscription',component: Inscription},
    { path: '', redirectTo: 'home' , pathMatch: 'full' },
  
];
