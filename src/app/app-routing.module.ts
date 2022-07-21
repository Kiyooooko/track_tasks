import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './components/projects/projects.component';
import { redirectLoggedInTo, canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { SigninComponent } from './auth/auth/signin/signin.component';
import { SignupComponent } from './auth/auth/signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: '/board', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent, ...canActivate(() => redirectLoggedInTo(['board'])) },
  { path: 'signup', component: SignupComponent, ...canActivate(() => redirectLoggedInTo(['board']))},
  { 
    path: 'board',
    ...canActivate(() => redirectUnauthorizedTo(['signin'])),
    loadChildren: () => import('./modules/board/board.module').then(m => m.BoardModule),
  },
  { path: 'projects', component: ProjectsComponent},

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }