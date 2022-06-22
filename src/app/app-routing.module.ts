import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule),
    data: {
      title: 'Home'
    }
  },

  {
    path: 'details',
    loadChildren: () => import('./components/currency-details/currency-details.module').then(m => m.CurrencyDetailsModule),
    data: {
      title: 'Details'
    }
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
