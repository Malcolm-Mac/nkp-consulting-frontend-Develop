import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NavigationComponent} from './navigation/navigation.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'services', component:ServicesComponent},
  {path: 'contact', component: ContactComponent},
  {path:'about', component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ContactComponent,HomeComponent,NavigationComponent,ServicesComponent,AboutComponent]