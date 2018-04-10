import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ContactsModule } from '../store/contacts/contacts.module';
import { CoreModule } from '../core/core.module';
import { AlertService } from '../core/alert/alert.service';
import { TextAvatarDirective } from '../core/text-avatar/text-avatar';
import { ModalService } from '../core/modal/modal.service';
import { NewTransactionModal } from '../core/modal/new-transaction/new-transaction.modal';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    TextAvatarDirective,
    NewTransactionModal
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ContactsModule,
    CoreModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AlertService,
    ModalService
  ]
})
export class AppModule {}
