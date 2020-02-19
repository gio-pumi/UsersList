import { User } from './../../models/User';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})

export class GroupsComponent implements OnInit {

  @Input() getFullListOfUsers: User[];

  @Output() sendUserListByGroup: EventEmitter<User> = new EventEmitter<User>();

  constructor() { }

  ngOnInit() {
  }

  getListByGroup(groupNumber: number): void {
    this.sendUserListByGroup.emit(this.getFullListOfUsers[groupNumber]);
  }

}

