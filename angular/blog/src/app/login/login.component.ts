import { Component} from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router) {}

  login(): void {
    this.userService.login(this.username, this.password).subscribe(
      (response) => {
        console.log('Login exitoso', response);
        localStorage.setItem('username', JSON.stringify({ username: this.username }));
        this.router.navigate(['/blog']); 
      },
      (error) => {
        console.error('Error en el login', error);
      }
    );
  }
}