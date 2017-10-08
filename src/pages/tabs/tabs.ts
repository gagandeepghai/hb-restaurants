import { Component, OnInit } from '@angular/core';

import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { UserHomePage } from '../user-home/user-home';
import { LocatePage } from '../locate/locate';
import { MenuPage } from '../menu/menu';
import { UserService } from '../../providers/user-service';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage implements OnInit {
  
  tabForHome: any = HomePage;
  tabForMenu: any = MenuPage;
  tabForLocate: any = LocatePage;
  tabForUserContext: any = null;

  userContextTitle : String = null;

  activeEventCount: number;

  constructor(private userService: UserService) {
  }

  inferUserContext(context) {
   if(!context) {
      this.userContextTitle = "Login";
      this.tabForUserContext = LoginPage;
    } else {
      this.userContextTitle = "Profile";  
      this.tabForUserContext = UserHomePage;  
    }
  }

  ngOnInit(){
    this.userService.getUserContext().subscribe(userContext => this.inferUserContext(userContext));
  }
}
