import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharactersComponent } from './characters/characters.component';
import { DashbroadComponent } from './dashbroad/dashbroad.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { MenuComponent } from './menu/menu.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"menu",component:MenuComponent},
  {path:"dashbroad",component:DashbroadComponent},
  {path:"map",component:MapComponent},
  {path:"user",component:UserComponent},
  {path:"character",component:CharactersComponent},
  {path:'character-detail?id=1',component:CharacterDetailComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
