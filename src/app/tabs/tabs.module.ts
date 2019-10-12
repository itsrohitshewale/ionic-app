import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';


const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children : [
      //child routing or nested routing..
      { path : "", redirectTo : 'library', pathMatch : 'full' },
      { path: 'library', loadChildren: '../library/library.module#LibraryPageModule' },
      { path: 'favourite', loadChildren: '../favourite/favourite.module#FavouritePageModule' },
      { path: 'quotedetails', loadChildren: '../quotedetails/quotedetails.module#QuotedetailsPageModule' }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
