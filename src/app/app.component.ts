import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { DarkThemeToggleComponent } from './common/dark-theme-toggle.component';
import { NavbarComponent } from './common/navbar.component';
import { SidebarService } from './common/services/sidebar';
import { SidebarComponent } from './common/sidebar.component';
import { SidebarItemGroupComponent } from './common/sidebar-item-group.component';
import { SidebarItemComponent } from './common/sidebar-item.component';
import { components } from './common/components';
import { ApiService } from "./service/api.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, RouterOutlet, RouterModule,
    DarkThemeToggleComponent, NavbarComponent, SidebarComponent, SidebarItemGroupComponent, SidebarItemComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit,OnDestroy{
  title = 'dashboard';
  isToken = false;
  public username:any
  public email:any
  components = components;
  constructor(readonly sidebarService: SidebarService,private authService:ApiService) {}

  logout(){
    console.log('logout');

    this.authService.services('POST','logout')
    .subscribe(
      res =>  {
        console.log(res);
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

  ngOnInit(): void {
    initFlowbite();
    if(this.getCookie('token')){
      this.isToken = true;
      this.username = localStorage.getItem('username');
      this.email = localStorage.getItem('email');
    }else{
      this.isToken = false;
    }
  }

  ngOnDestroy(): void {
  }
}
