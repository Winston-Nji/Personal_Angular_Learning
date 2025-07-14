import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './header/admin/admin.component';
import { HomeComponent } from './header/home/home.component';
import { HeroComponent } from './header/home/hero/hero.component';
import { SidebarComponent } from './header/home/sidebar/sidebar.component';
import { UserDetailComponent } from './header/admin/user-detail/user-detail.component';
import { UserListComponent } from './header/admin/user-list/user-list.component';
import { FormsModule } from '@angular/forms';
import { SubscriptionService } from './header/Services/Subscription.service';
import { HttpClient } from '@angular/common/http';
import { UserService } from './header/Services/User.services';
import { ConfirmationMsgService } from './header/Services/Confirmation.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminComponent,
    HomeComponent,
    HeroComponent,
    SidebarComponent,
    UserDetailComponent,
    UserListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [SubscriptionService, UserService, ConfirmationMsgService],
  bootstrap: [AppComponent]
})
export class AppModule { 

  // constructor(private http: HttpClient){
  //       this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(data => {
  //        (data);
  //       });
  //   }
}
