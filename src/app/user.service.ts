import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserList } from './user/userlist';
import { Observable,of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
// import { Users } from './mock-list';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private usersURL = 'api/users';

  
  constructor( private http:HttpClient) { }

  getUsers(): Observable<UserList[]> {
    return this.http.get<UserList[]>(this.usersURL)}
    // .pipe(catchError(this.handleError<UserList[]>('getUsers',[])))
  

  // getUsers():UserList[] {
  //   return Users;
  // }

  // getUsers():Observable<UserList[]> {
  //   const users = of(Users);
  //   return users;
  // }

  addUser(user: UserList): Observable<UserList> {
    const url = `${this.usersURL}/${user.id}`;

    return this.http
      .post<UserList>(url, user);
  }

  deleteUser(id:number): Observable<UserList> {
    const url = `${this.usersURL}/${id}`;

    return this.http.delete<UserList>(url);
    // .pipe(
    //   tap((_) => console.log(`delete hero id=${id}`)),
    //   catchError(this.handleError<Hero>(`getHero id=${id}`))
    // );
  }

  editUser(user:UserList): Observable<void> {
    const url = `${this.usersURL}/${user.id}`;
    
    return this.http.put<void>(url, user)}


    httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    };

  private handleError<T>(operation = 'operation', result?: T){
    return (error:any): Observable<T> => {
      console.error(error);

      return of(result as T);
    }
  }
}
