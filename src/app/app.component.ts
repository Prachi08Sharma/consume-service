import { Component, OnInit  } from '@angular/core';
import { UserService } from './user.service';
import { IUser } from './IUser';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'consume-service';
  // protected users$: Observable<IUser[]>;
users$!: IUser[];
constructor(public userservice: UserService) {}

ngOnInit() {
  this.userservice.getUsers().subscribe(res => {
    this.users$ = res;
  });
}





}
