import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.scss']
})
export class DiscussionComponent implements OnInit {

  comments: any;
  disscussionID:number = 0;

  newComment: any = {
    discussionid: 0,
    username: "",
    text: "",
    isspoiler: false
  };

  constructor(private http:HttpClient,private router :ActivatedRoute) { }

  ngOnInit(): void {
    this.disscussionID =  this.router.snapshot.params.id;
    this.newComment.discussionid = this.router.snapshot.params.id;
    this.displayInput();
    this.http.get("https://cinephiliacsapi.azurewebsites.net/forum/comments/" + this.disscussionID).subscribe(data =>{ 
      console.log(data);
      this.comments = data;
    });
  }

  displayInput(){
    if(localStorage.getItem("loggedin"))
    {
      this.newComment.username= localStorage.getItem("loggedin");
      console.log("User Logged In");
    }else{
      console.log("Hide inputs");
    }
  }

  postComment(){
    if(this.newComment.text ==""){
      console.log("Please enter a comment");
    }else{
      this.http.post("https://cinephiliacsapi.azurewebsites.net/Forum/comment",this.newComment).subscribe(data => console.log(data));
    }
    console.log(this.newComment);
  }

}
