import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'employee',
    loadChildren: () => import('./employee/employee.module').then( m => m.EmployeePageModule)
  },
  {
    path: 'quiz-category',
    loadChildren: () => import('./quiz-category/quiz-category.module').then( m => m.QuizCategoryPageModule)
  },
  {
    path: 'basic-crud',
    loadChildren: () => import('./basic-crud/basic-crud.module').then( m => m.BasicCrudPageModule)
  },
  {
    path: 'quiz-category-list',
    loadChildren: () => import('./quiz-category-list/quiz-category-list.module').then( m => m.QuizCategoryListPageModule)
  },
  {
    path: 'quiz-type-list',
    loadChildren: () => import('./quiz-type-list/quiz-type-list.module').then( m => m.QuizTypeListPageModule)
  },
  {
    path: 'quiz-type',
    loadChildren: () => import('./quiz-type/quiz-type.module').then( m => m.QuizTypePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
