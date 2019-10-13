import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginService } from './service/login.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { 
    path: 'tabs', 
    canActivate: [LoginService],
    loadChildren: './tabs/tabs.module#TabsPageModule' 
  },
  { path: 'quote', loadChildren: './quote/quote.module#QuotePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})  
export class AppRoutingModule { }
 