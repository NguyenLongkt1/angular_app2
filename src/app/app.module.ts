import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { DashbroadComponent } from './dashbroad/dashbroad.component';
import { MapComponent } from './map/map.component';
import { UserComponent } from './user/user.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharacterServiceService } from './character-service.service';
import { CharacterData } from './characterData';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    DashbroadComponent,
    MapComponent,
    UserComponent,
    CharactersComponent,
    CharacterDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CharacterServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
