import { Routes } from '@angular/router';
import { HeaderComponent } from './app/header/header.component';
import { BodyComponent } from './app/body/body.component';

export const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'body', component: BodyComponent },
];
