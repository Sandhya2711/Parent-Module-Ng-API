import { Component, OnInit } from '@angular/core';
import { NgForm} from "@angular/forms";
import { LoginServiceService } from 'src/app/service/login-service.service';
import { User } from 'src/app/User';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  user=new User();
  
  msg:String="";
  constructor(private loginService:LoginServiceService, private router:Router) { }

  loginUser(){

    console.log("inside login ");
    this.loginService.loginUserService(this.user).subscribe(
      data=> {
          console.log("respose got",data);
          let userName=data.username;
          sessionStorage.setItem("userData", userName);
          this.router.navigate(['/loginSuccess']);
        
    },
      errpr=> {console.log("error");
      this.msg="Bad Credentials,Please Enter valid Email and Password";  
    }
    )

  }
  ngOnInit(): void {
  }

}
