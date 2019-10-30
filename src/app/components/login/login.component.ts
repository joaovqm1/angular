import { RequestService } from './../../services/request.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private requestService: RequestService) { }

  ngOnInit() {
  }

  async onLoginButtonClicked() {
    this.requestService.logIn(this.username, this.password).subscribe(
      user => {
        alert('User logged in');
        console.log(user)
    }, error => {
        alert(error.message);
    });
  }

}
