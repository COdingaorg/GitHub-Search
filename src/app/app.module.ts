import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { GitResultsComponent } from './git-results/git-results.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserSearchComponent,
    GitResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
