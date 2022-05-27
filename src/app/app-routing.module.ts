import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  { 
    path: 'board',
    loadChildren: () => import('./modules/board/board.module').then(m => m.BoardModule),
  },
  { path: 'projects', component: ProjectsComponent},
  { path: '', redirectTo: '/board', pathMatch: 'full' }

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