import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  user:any = []


  constructor(private router:Router, private loginService:LoginServiceService) { 
    this.loginForm={} as FormGroup;
  }

  ngOnInit(): void {
    this.loginForm= new FormGroup({
      username:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required]),
      device_id: new FormControl('fgdg')
    })
  }
  onSubmit(){
    if(this.loginForm.value){
      this.loginService.login(this.loginForm.value).subscribe((res)=>{
        console.log(res)
        this.user = res;
        this.loginService.token = res.data.token
        this.loginService.user_id = res.data.id
        this.loginService.username  = res.data.username
        console.log(this.loginService.token ,this.loginService.token )
        this.router.navigate(['/dashboard'])
      },
      (error)=>{
        console.log(error)
      })
    }
    else{
      prompt("error in login info")
    }
  }
  handleClick(event: MouseEvent): void {
    event.stopPropagation();
  }
   

}
