import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user.service';
import { UserList } from './userlist';
import { InMemoryDataService } from '../in-memory-data.service';
// import { Users } from '../mock-list';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
// fname:string;
//  lname:String='HRU';
//  DOB:number = 90;
//  nameArray:String[];
//  today = Date.now();
 users:UserList[] = [];
 currentDate = new Date;
year = this.currentDate.getFullYear();
   constructor(private userService:UserServiceService,private memoryService:InMemoryDataService) {
    
   }

  ngOnInit(): void {
    this.getUsers();
    console.log("This is what Im getting "+this.year)
  }


  // getUsers():void{
  //   this.userService.getUsers()
  //   .subscribe((users) => (this.users = users));
  // }

  getUsers(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  addUser(f): void {
    let newUser: UserList = {
       id: this.memoryService.getId(this.users),
       fname: f.value.newUser.fname,
       lname : f.value.newUser.lname,
       DOB: f.value.newUser.DOB,
       age:f.value.newUser.age
    };
    let birthDate = new Date(f.value.newUser.DOB).getFullYear();
    let currentDate = new Date().getFullYear()
    let age  = currentDate-birthDate;
    newUser.age = age;

    console.log("Is your age ..."+ age)
    console.log(f);
    this.userService
      .addUser(newUser)
      .subscribe((users) => this.users.push(users));

    console.log(newUser);
  }

 deleteUser(user:UserList):void{
  this.userService
  .deleteUser(user.id)
  // .subscribe((users) => this.users.splice(this.heroes.indexOf(hero), 1));
  .subscribe((users) => this.users.splice(this.users.indexOf(user),1));

  }

  editUser(g):void{ 
    let newUser: UserList = {
      id: g.value.newUser.id,
      fname: g.value.newUser.fname,
       lname : g.value.newUser.lname,
       DOB: g.value.newUser.DOB,
       age:g.value.newUser.age
    };
    let birthDate = new Date(g.value.newUser.DOB).getFullYear();
    let currentDate = new Date().getFullYear()
    let age  = currentDate-birthDate;
    newUser.age = age;

    console.log("Is your age ..."+ age)
    console.log(g);
    this.userService
      .editUser(newUser)
      .subscribe(()=> { console.log(newUser);
      this.getUsers()} );

    // console.log("After the commit"+ this.getUsers());
        
  }

  log(username):void{
    console.log(username);
  }
  
  onclick():void {
    // this.fname= prompt("Enter First Name");
    // prompt("Input Last Name")
    // prompt("Input DOB")


    // this.nameArray+=[this.fname]
    
    // this.nameArray.push("loops")
    // this.nameArray
    // console.log(this.nameArray)
    console.log(this.users)
  }
}
