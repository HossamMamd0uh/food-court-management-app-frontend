import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoresListComponent } from './components/store-list/store-list.component';
import { AddStoreComponent } from './components/add-store/add-store.component'
const routes: Routes = [
  { path: '', redirectTo: 'stores', pathMatch: 'full' },
  { path: 'stores', component: StoresListComponent },
  { path: 'add', component: AddStoreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
