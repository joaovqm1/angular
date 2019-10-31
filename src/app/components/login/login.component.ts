import { RequestService } from './../../services/request.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(
    private requestService: RequestService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async onLoginButtonClicked() {
    this.requestService.logIn(this.username, this.password).subscribe(
      usuario => {
        this.router.navigateByUrl('/dashboard', { state: usuario });
      }, error => {
        alert(error.message);
      });
  }

}
