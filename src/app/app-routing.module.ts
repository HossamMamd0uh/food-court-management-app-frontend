import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoresListComponent } from './components/store-list/store-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'stores', pathMatch: 'full' },
  { path: 'stores', component: StoresListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
