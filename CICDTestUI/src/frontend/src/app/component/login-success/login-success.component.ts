import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/service/login-service.service';
import { Match } from 'src/app/component/match';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-login-success',
  templateUrl: './login-success.component.html',
  styleUrls: ['./login-success.component.css']
})
export class LoginSuccessComponent implements OnInit {

  userData:String;
  matches:Match[];
  constructor(private loginService:LoginServiceService,private route:ActivatedRoute) {
    loginService.getMatchSechdule().subscribe(data=> {
      this.matches=data;
    
    });
    console.log(this.matches)
   }

  ngOnInit(): void {

    this.userData=sessionStorage.getItem("userData");
 
  }

  getDate(dateStr):Date{
    console.log(dateStr)
       let d=new Date(dateStr);
       console.log("date",d)
       return d;
  }

}
