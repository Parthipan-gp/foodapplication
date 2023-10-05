import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { SearchComponent } from './search/search.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import {  HttpClientModule } from '@angular/common/http';
import { RestaurantService } from './services/restaurant.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SearchComponent,
    LoginComponent,
    RegisterComponent,
    FavoriteComponent,
    RestaurantComponent,
    PageNotFoundComponent,
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSnackBarModule

    
  ],
  providers: [ RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
