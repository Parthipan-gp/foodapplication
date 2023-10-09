import { CanDeactivateFn } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

export const canDeactivateGuard: CanDeactivateFn<RegisterComponent> = (component:RegisterComponent, currentRoute, currentState, nextState) => {

  console.log("inside guard")
  return component.canDeactivate();
};
