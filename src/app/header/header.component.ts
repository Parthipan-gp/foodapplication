import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public authService:AuthService,private matDialog:MatDialog){}

  openlogin(){
    this.matDialog.open(LoginComponent,{
      width:'350px',
    })
  }

  openRegister(){
    this.matDialog.open(RegisterComponent,{
      width:'450px'
    })
  }

}
