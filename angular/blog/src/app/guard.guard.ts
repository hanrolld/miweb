import { CanActivateFn} from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  if (localStorage.getItem('usuario')!= undefined) {
     console.log ('eureka')
    return true;
   } console.log (localStorage.getItem('usuario'))
    return true;
   };
