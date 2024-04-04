import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchComponent } from './header/search/search.component';
import { UserComponent } from './header/user/user.component';
import { TitleComponent } from './header/title/title.component';
import { ContainerComponent } from './container/container.component';
import { ListBeachesComponent } from './container/list-beaches/list-beaches.component';
import { BeachComponent } from './container/list-beaches/beach/beach.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    UserComponent,
    TitleComponent,
    ContainerComponent,
    ListBeachesComponent,
    BeachComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
