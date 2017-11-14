import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//Services
import { UserService } from '../providers/user-service';
import { RestaurantService } from '../providers/restaurant-service';

//Mocks
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from '../mocks/in-memory-data.service';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { UserHomePage } from '../pages/user-home/user-home';
import { LocatePage } from '../pages/locate/locate';
import { MenuPage } from '../pages/menu/menu';
import { TabsPage } from '../pages/tabs/tabs';

//modals
import { MenuView } from '../modals/menu/menu-view';
import { PhotosSlideShow } from '../modals/gallery/gallery';
import { HistoryModal } from '../modals/history/history';
import { StoryModal } from '../modals/story/story';
import { BanquetModal } from '../modals/banquet/banquet';
import { TAMenuModal } from '../modals/takeaway/takeaway';
import { FoodFactsModal } from '../modals/facts/facts';
import { MenuViewDrinks } from '../modals/menu-drinks/menu-view-drinks';

import { ForgotPasswordPage} from '../pages/login/forgot/forgot';

//Components
import { SpiceLevel } from '../modals/menu/item-card/spice-level/spice-level';
import { ItemCardComponent } from '../modals/menu/item-card/item-card';
import { ReviewsComponent  } from '../pages/locate/reviews/reviews';
import { StarRatingComponent } from '../components/starratingcomponent';
import { InfoCard } from '../pages/login/card-display/card-display';

// import { RegisterPage} from '../pages/login/login';

//PLUGINS
import { CallNumber } from '@ionic-native/call-number';

@NgModule({
  imports: [
    IonicModule.forRoot(MyApp),
    FormsModule,
    // InMemoryWebApiModule.forRoot(InMemoryDataService),
    IonicModule.forRoot(MyApp,{
      menuType: 'push',
      platforms: {
        ios: {
          menuType: 'overlay',
        }
      }
    })
  ],
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    LoginPage,
    UserHomePage,
    LocatePage,
    MenuPage,
    MenuView,
    ItemCardComponent,
    SpiceLevel,
    ReviewsComponent,
    StarRatingComponent,
    InfoCard,
    PhotosSlideShow,
    ForgotPasswordPage,
    HistoryModal,
    StoryModal,
    BanquetModal,
    TAMenuModal,
    FoodFactsModal,
    MenuViewDrinks
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    LoginPage,
    UserHomePage,
    LocatePage,
    MenuView,
    MenuPage,
    PhotosSlideShow,
    ForgotPasswordPage,
    HistoryModal,
    StoryModal,
    BanquetModal,
    TAMenuModal,
    FoodFactsModal,
    MenuViewDrinks
  ],
  providers: [UserService, RestaurantService, CallNumber,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
