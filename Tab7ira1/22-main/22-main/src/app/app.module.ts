import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { Routes , RouterModule} from '@angular/router';
// import { FormsModule } from '@angular/forms';


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
import { LeftBeachesComponent } from './container/left-beaches/left-beaches.component';
import { BookingComponent } from './booking/booking.component';
import { FirstComponent } from './first/first.component';
import { ContainerBookingComponent } from './booking/container-booking/container-booking.component';
import { InfoBeachComponent } from './booking/info-beach/info-beach.component';
import { ScheduleComponent } from './booking/schedule/schedule.component';
import { ActivityComponent } from './booking/info-beach/activity/activity.component';
import { BookingButComponent } from './booking/schedule/booking-but/booking-but.component';
import { PlanningComponent } from './booking/schedule/planning/planning.component';
import { CommentsComponent } from './booking/comments/comments.component';
import { CommentComponent } from './booking/comments/comment/comment.component';
import { RequestsComponent } from './requests/requests.component';
import { RequestComponent } from './requests/request/request.component';
import { ModifyRestaurantComponent } from './modify-restaurant/modify-restaurant.component';
import { ResturantComponent } from './resturant/resturant.component';
import { AdminPanelComponent } from './booking/admin-panel/admin-panel.component';
import { Booking1Component } from './booking1/booking1.component';
import { PublicbeachComponent } from './publicbeach/publicbeach.component';
import { ModifypublicbeachComponent } from './modifypublicbeach/modifypublicbeach.component';
import { LoginComponent } from './login/login.component';
import { ClientComponent } from './client/client.component';
import { BeachesCComponent } from './client/beaches-c/beaches-c.component';
import { BeachCComponent } from './client/beaches-c/beach-c/beach-c.component';
import { InfoBeachClientComponent } from './info-beach-client/info-beach-client.component';
import { TopImageComponent } from './info-beach-client/top-image/top-image.component';
import { DescriptionClientComponent } from './info-beach-client/description-client/description-client.component';
import { ScheduleClientComponent } from './info-beach-client/schedule-client/schedule-client.component';
import { BookingButClientComponent } from './info-beach-client/schedule-client/booking-but-client/booking-but-client.component';
import { PlanningClientComponent } from './info-beach-client/schedule-client/planning-client/planning-client.component';
import { FormsModule } from '@angular/forms';
import { LoggingComponent } from './logging/logging.component';
import { provideHttpClient } from '@angular/common/http';
import { ListpublicComponent } from './listpublic/listpublic.component';
import { AcceuComponent } from './acceu/acceu.component';
import { PublicClientComponent } from './public-client/public-client.component';
import { InfoprivateComponent } from './infoprivate/infoprivate.component';

const routes : Routes = [
  {path:'booking' , component: BookingComponent},
  {path:'' , component: LoggingComponent},
  // {path:'resturant' , component: ResturantComponent},
  {path:'resturant', component: ResturantComponent},
  // {path:'' , component: PublicbeachComponent},
  // {path:'' , component: ContainerComponent},
  // {path:'' , component: ListpublicComponent},
  {path:'publicbeach', component:PublicbeachComponent},
  {path:'modigy-restaurant' , component:ModifyRestaurantComponent},
  // {path:'publicbeach', component:PublicbeachComponent},

  // {path:'' , component: ListBeachesComponent},
  // {path:'' , component: Booking1Component},
  {path:'beaches-c' , component: BeachesCComponent},

  {path:'container' , component: ContainerComponent},
  {path:'acceu', component:AcceuComponent},
  {path:'listpublic', component:ListpublicComponent},
  // {path:'modifypublicbeach', component:ModifypublicbeachComponent},
  {path:'modifypublicbeach', component: ModifypublicbeachComponent},
  {path:'public-client', component: PublicClientComponent},
  {path:'info-beach-client', component: InfoBeachClientComponent},


  
  


  

  {path:'modify-restaurant/:beach' , component: ModifyRestaurantComponent},
  {path:'resturant', component: ResturantComponent},
  {path:'booking1' , component:Booking1Component},

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    UserComponent,
    TitleComponent,
    ContainerComponent,
    ListBeachesComponent,
    BeachComponent,
    LeftBeachesComponent,
    BookingComponent,
    FirstComponent,
    ContainerBookingComponent,
    InfoBeachComponent,
    ScheduleComponent,
    ActivityComponent,
    BookingButComponent,
    PlanningComponent,
    CommentsComponent,
    CommentComponent,
    RequestsComponent,
    RequestComponent,
    ModifyRestaurantComponent,
    ResturantComponent,
    AdminPanelComponent,
    Booking1Component,
    PublicbeachComponent,
    ModifypublicbeachComponent,
    // LoginComponent,
    ClientComponent,
    BeachesCComponent,
    BeachCComponent,
    InfoBeachClientComponent,
    TopImageComponent,
    DescriptionClientComponent,
    ScheduleClientComponent,
    BookingButClientComponent,
    PlanningClientComponent,
    LoggingComponent,
    ListpublicComponent,
    AcceuComponent,
    PublicClientComponent,
    InfoprivateComponent,
    // sNewLoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    RouterModule.forRoot(routes),
    FormsModule,
    LoginComponent
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
