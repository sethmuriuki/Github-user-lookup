import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Github Look up';

  constructor(private http: Http) {}
  userName = '';
  githubinfo: any = '';
  public_repos: any = '';
  searchUser() {
    this.getUserInfo();
  }
  getUserInfo() {
   this.http.get('https://api.github.com/users/' + this.userName )
    .subscribe(
      (res: Response) => {
        const myData = res.json();
         console.log(myData);
         this.githubinfo = myData;
      }
   );
  }

}
