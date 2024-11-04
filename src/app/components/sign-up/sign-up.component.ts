import { Component } from '@angular/core';
import { ChatService } from './../../services/chat.service';
import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  username = '';
  email = '';
  password = '';
  confirmPassword = '';
  constructor(private authService: ChatService, private router: Router, private userService: UserService) { }
  
  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.username && this.email && this.password && this.confirmPassword) {
      if (this.password === this.confirmPassword) {
        const userData = {
          username: this.username,
          email: this.email,
          password: this.password,
        };

        this.authService.signUp(userData)
          .subscribe((data: any) => console.log(data), (error: any) => console.error(error));
          this.userService.setUsername(userData.username);
          this.router.navigate(['/']);
      } else {
        alert('Пароли не совпадают');
      }
    } else {
      alert('Пожалуйста, заполните все поля');
    }
  }
}
