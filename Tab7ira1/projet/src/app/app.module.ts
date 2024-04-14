import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { Routes , RouterModule} from '@angular/router';


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


const routes : Routes = [
  {path:'booking' , component: BookingComponent},
  {path:'' , component: ContainerComponent},
  {path:'modify-restaurant' , component: ModifyRestaurantComponent},
  {path:'resturant', component: ResturantComponent},
  {path:'booking1' , component:Booking1Component}
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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
