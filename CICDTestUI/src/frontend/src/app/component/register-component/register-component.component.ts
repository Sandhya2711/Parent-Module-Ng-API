import { Component, OnInit } from '@angular/core';
import { NgForm} from "@angular/forms";
import { User } from 'src/app/User';
import { LoginServiceService } from 'src/app/service/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {

  user=new User();
  msg='';
  constructor(private registrationService: LoginServiceService, private router : Router) { }

  ngOnInit(): void {
  }

  userRegistration(){

    this.registrationService.registerUser(this.user).subscribe(
      data=>{
        console.log("response recieved");
        //this.msg="Registeration Successful"
        this.router.navigate(["/login"]);
      },
      error=>{
        console.log("errorr",error);
        this.msg="Registration Failed, Please Enter Valid Details";
       // console.log("msg",this.msg)
      }
    )
  }

}
