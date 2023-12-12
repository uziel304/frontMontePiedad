import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from "../../service/api.service";
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './auth.component.html',
})

export class AuthComponent  {
  constructor(private authService:ApiService,private router: Router,
    private route: ActivatedRoute) {}
  user={email:'',password:''}

  login(){
    this.authService.services('POST','login',this.user)
    .subscribe(
      res =>  {
        if(this.getCookie('token')){
          localStorage.setItem('username',res.username)
          localStorage.setItem('email',res.email)
          this.router.navigate(['/dashboard']);
        }
      },
      err => console.log(err)
    )
  }

  private getCookie(name: string) {
      let ca: Array<string> = document.cookie.split(';');
      let caLen: number = ca.length;
      let cookieName = `${name}=`;
      let c: string;

      for (let i: number = 0; i < caLen; i += 1) {
          c = ca[i].replace(/^\s+/g, '');
          if (c.indexOf(cookieName) == 0) {
              return c.substring(cookieName.length, c.length);
          }
      }
      return '';
  }
}
