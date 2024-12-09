import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsParentComponent } from './about-us-parent/about-us-parent.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Corrected default path
  { path: 'aboutUsParent', component: AboutUsParentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
