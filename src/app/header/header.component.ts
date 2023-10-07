import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { UserFavorite } from '../model/userfavorite';
import { FavoriteService } from '../services/favorite.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  user:UserFavorite={}

  constructor(public authService:AuthService,private matDialog:MatDialog, private favoriteService:FavoriteService){}

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

  ngOnInit(){
    this.favoriteService.getUserByUserId().subscribe({
      next:data=>{
        this.user=data
      },
    })
  }


  logout(){
    this.authService.islogout();
  }

}
