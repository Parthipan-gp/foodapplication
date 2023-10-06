import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../model/user';
import { ToastrService } from 'ngx-toastr';
import { RouterService } from '../services/router.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService:AuthService,private mb:MatSnackBar,private routeService:RouterService,private router:Router){}

  user:User={}
  

  validateUserCode(){
   if(this.user.userEmail && this.user.userPassword){
      this.authService.logIn(this.user).subscribe({
        
        next:data=>{
          console.log(data)
          console.log(data.message)
          if(data.message==1){   // checking wheather the returned response object contains token
            this.mb.open('Login', 'successful', {duration: 2000,panelClass: ['mat-toolbar', 'mat-primary']});
            localStorage.setItem("token",data.token)    //saving the token in the form of key value pair in the local storage of the web browser
            this.authService.isLoggedStatus=true;       // making loggedStatus to true
            console.log(this.authService.isLoggedStatus)
            this.router.navigate([""])
            // this.routeService.navigateToHomeView;       // navigating to home view
          }
          
        },
        error:error=>{
          this.mb.open('Login', 'failed', {duration: 2000,panelClass: ['mat-toolbar', 'mat-primary']});
        }

      })
   }
  }

  


  
}


