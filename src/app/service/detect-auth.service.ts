import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetectAuthService {

  $loginIN = new BehaviorSubject(this.getCookie('token'));

  setTheme(token:string) {
    this.$loginIN.next(token);
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
  toggleTheme() {
    const token = this.$loginIN.getValue();
    this.setTheme(token !== '' ? token : '');
  }
}
