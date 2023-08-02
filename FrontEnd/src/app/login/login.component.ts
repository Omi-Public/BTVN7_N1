import { Component, EventEmitter, Output } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output() goToDashboard = new EventEmitter();
  username: any = null;
  password: any = null;
  resultLogin: any = null;

  constructor(
    private userService: UserService
  ){}

  ngOnInit() {
  }

  login(){
    this.userService.login(this.username, this.password).subscribe(result => {
      console.log(result);
      if (result && result.accessToken){
        window.localStorage.setItem("accessToken", result.accessToken);
        this.resultLogin = null;
        this.goToDashboard.emit();
      } else {
        this.resultLogin = "Username or Password is incorrect!";
      }
    },
    error => {
      console.log(error);
      this.resultLogin = "Username or Password is incorrect!";
    }
    )
  }
}
