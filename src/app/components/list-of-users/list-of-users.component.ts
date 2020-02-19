import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-list-of-users',
  templateUrl: './list-of-users.component.html',
  styleUrls: ['./list-of-users.component.css']
})
export class ListOfUsersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() selectedUserList: User[];

  @Output() selectedUser: EventEmitter<User> = new EventEmitter<User>();

  onUserClick(user: User): void {
    this.selectedUser.emit(user);
  }
}
