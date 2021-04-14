import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {

  myNumber: number = 0;
  myStrings: string = "";
  users:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get("https://cinephiliacsapi.azurewebsites.net/user/users").subscribe(data => {
      console.log(data);
      this.users=data;
  });
  }

  function1(): void {
    this.myNumber++;
  }

  function2(s1: string, s2: string): void {
    this.myStrings = s1 + s2;
  }

  function3(myString: string): string {
    return myString + myString;
  }
}
