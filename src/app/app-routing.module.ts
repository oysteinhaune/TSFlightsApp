import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
