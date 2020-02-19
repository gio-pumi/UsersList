import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/models/User';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Output() recivedUserListByGroup: EventEmitter<User> = new EventEmitter<User>();

  constructor(private userSerrvices: UsersService) { }

  public FullUsersList: User[];
  currentListByGroup: User[];
  userDetails: User;

  ngOnInit() {
    this.userSerrvices.getAllUsers()
      .subscribe(u => {
        this.FullUsersList = u
      },
        err => alert(err.message));
  }

  onUserList(usersList: User[]): void {
    this.currentListByGroup = usersList;
  }
  onUserDetail(user: User) {
    this.userDetails = user;
  }
}
