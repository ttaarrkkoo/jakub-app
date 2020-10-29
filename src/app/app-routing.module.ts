import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
// { path: '', redirectTo: '/register', pathMatch: 'full' }, ,
{ path: 'login', 
component: LoginComponent },

{ path: 'home',
component: HomeComponent,
children: [
  {
  path: '',
  component: SearchComponent
  }
,
  {path: 'details/:id',
component: DetailsComponent}

,
{path: 'weather',
component: WeatherComponent}

] },

{ path: '',
redirectTo: 'home',
pathMatch: 'full'},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
