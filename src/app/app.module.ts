import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { UserService } from '../providers/user-service'

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { UserHomePage } from '../pages/user-home/user-home';
import { LocatePage } from '../pages/locate/locate';
import { MenuPage } from '../pages/menu/menu';
import { TabsPage } from '../pages/tabs/tabs';

// import { ForgotPasswordPage} from '../pages/login/forgot/forgot';
// import { RegisterPage} from '../pages/login/login';

@NgModule({
  imports: [
    IonicModule.forRoot(MyApp),
    FormsModule
  ],
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    LoginPage,
    UserHomePage,
    LocatePage,
    MenuPage
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    LoginPage,
    UserHomePage,
    LocatePage,
    MenuPage
  ],
  providers: [UserService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
