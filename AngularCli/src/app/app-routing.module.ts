import {NgModule, Component} from '@angular/core';
import { RouterModule ,Routes} from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { HomeComponent } from './include/home/home.component';
import { AboutComponent } from './include/about/about.component';
import { ContactUsComponent } from './include/contact-us/contact-us.component';
import { UserhomeComponent } from './include/userhome/userhome.component';
import { CommentsComponent } from './include/comments/comments.component';
import { AttractionplaceComponent } from './attraction-place/attractionplace/attractionplace.component';
import { AttractionListPageComponent } from './attraction-place/attraction-list-page/attraction-list-page.component';
import { AttractionDetailsComponent } from './attraction-place/attraction-details/attraction-details.component';
import { AttractionEditComponent } from './attraction-place/attraction-edit/attraction-edit.component';
import { AttractionComponent } from './attraction-place/attraction/attraction.component';

const routers : Routes = [
  {path: '',component: HomeComponent,pathMatch: 'full'},
  {path: '', redirectTo:'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'attraction/:id', component: AttractionComponent},
  {path: 'userhome', component: UserhomeComponent},
  {path: 'comments', component: CommentsComponent},
  {path: 'attraction-details', component:AttractionDetailsComponent},
  {path: 'rootpath', component: AttractionplaceComponent},
  {path: 'attraction-edit/:id', component: AttractionEditComponent},

  // {path: 'attraction-details', component: AttractionDetailsComponent,
  //     children:[
  //       {path: 'add-attraction', component: AttractionplaceComponent},
  //     ]
  // },
  
  {path: 'attractionlistpage', component: AttractionListPageComponent},
]

@NgModule({
  imports:[RouterModule.forRoot(routers)], // <-- debugging purposes only
  exports:[RouterModule]
})

export class AppRoutingModule{

}