import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { GroupsComponent } from './components/groups/groups.component';
import { ListOfUsersComponent } from './components/list-of-users/list-of-users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    HomeComponent,
    GroupsComponent,
    ListOfUsersComponent,
    UserDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
