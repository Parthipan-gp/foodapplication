import { Component } from '@angular/core';
import { RestaurantData } from '../model/restaurant-description';
import { UserFavorite } from '../model/userfavorite';
import { FavoriteService } from '../services/favorite.service';
import { FormBuilder,FormGroup,FormControl,Form, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

   //to post user details
  constructor(private fb:FormBuilder,private favoriteService:FavoriteService,private mb:MatSnackBar,private router:Router,private matDialog:MatDialog) {}

  openlogin(){
    this.matDialog.open(LoginComponent,{
      width:'350px',
    })
  }


  profileForm=this.fb.group({

    userName:['',[Validators.required,Validators.pattern("^[a-zA-Z \-\']+")]],
    userEmail:['',[Validators.required,Validators.pattern("^[a-zA-Z_.+-]+[a-zA-Z0-9_.+-]+@[a-zA-Z-]+\.[a-zA-Z-.]+$")]],
    userPassword:['',[Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]],
    userPhoneNo:['',[Validators.required,Validators.maxLength(10),Validators.pattern(/^[789]\d{9,9}$/)]],
   
  })

  get userName(){ return this.profileForm.get("userName")}
  get userEmail(){return this.profileForm.get("userEmail")}
  get userPassword(){return this.profileForm.get("userPassword")}
  get userPhoneNo(){ return this.profileForm.get("userPhoneNo")}
  get userImage(){ return this.profileForm.get("userImage")}



  //to post all the user details 
  onSubmit(){
    console.log(" register method invoked")
    
    let  userfavorite:UserFavorite=this.profileForm.value as UserFavorite

    this.favoriteService.registerUser(userfavorite).subscribe(()=>{alert("added")});
    this.mb.open('Congrats!!You have submiited the form!!', 'success', {
      duration: 5000,
      panelClass: ['mat-toolbar', 'mat-primary']
    });
    this.router.navigate([""])
    
  }

}
