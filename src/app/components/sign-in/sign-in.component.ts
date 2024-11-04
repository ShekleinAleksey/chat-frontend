import { Component } from '@angular/core';
import { ChatService } from './../../services/chat.service';
import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  login!: string;
  password!: string;

  constructor(private authService: ChatService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.authService.signIn(this.login, this.password)
      .subscribe((data: any) => {
        this.userService.setUsername(this.login);
        this.router.navigate(['/']);
        console.log(data);
      }, (error: any) => {
        console.error(error);
      });
  }
}
