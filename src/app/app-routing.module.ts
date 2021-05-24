import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UserResultsComponent } from './user-results/user-results.component';
import { UserSearchComponent } from './user-search/user-search.component';

const routes: Routes = [
  {path:'home', component:UserSearchComponent},
  {path:'about', component:AboutComponent},
  {path:'results', component:UserResultsComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'**', component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
