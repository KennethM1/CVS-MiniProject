import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { UserList } from './user/userlist';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService {
createDb(){
  const users = [
    {id:1, fname:'Kenneth',lname:'Marshall',DOB:Date.now(),age:60},
    {id:2, fname:'Steve',lname:'Miller',DOB:Date.now(),age:90},
    {id:3, fname:'Clarence',lname:'Jackson',DOB:Date.now(),age:32},
    {id:4, fname:'Lance',lname:'Richards',DOB:Date.now(),age:29},

  ];

  return {users};

  }

  getId(users: UserList[]): number {
    return users.length > 0
      ? Math.max(...users.map((user) => user.id)) + 1
      : 11;
  }
}  // constructor() { }

