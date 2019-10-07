import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestAppViewComponent } from './test-app-view/test-app-view.component';


const routes: Routes = [
  { path: "", component: TestAppViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
   
}
