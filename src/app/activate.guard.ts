import { CanActivateFn } from '@angular/router';
import { AuthService } from './services/auth.service';
import { inject } from '@angular/core';
import { RouterService } from './services/router.service';

export const activateGuard: CanActivateFn = (route, state) => {

  const auth:AuthService=inject(AuthService)
  const router:RouterService=inject(RouterService)


  if(auth.isLoggedStatus==true){
    return true
  }
  else{
    router.navigateToLoginView
    return false
  }
  
};
