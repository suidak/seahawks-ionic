import { TextlimitPipe } from './../pipes/textlimit/textlimit';
import { DonationService } from './../providers/donations/donation.service';
import { FundraiserService } from './../providers/fundraisers/fundraiser.service';


// The translate loader needs to know where to load i18n files
// in Ionic';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpModule } from '@angular/http';
import { FoundReports } from './../providers/FoundReports/FoundReports';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Camera } from '@ionic-native/camera';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
import { Items } from '../mocks/providers/items';
import { Settings } from '../providers/providers';
import { User } from '../providers/providers';
import { Api } from '../providers/providers';
import { MyApp } from './app.component';
import {TimeAgoPipe} from 'time-ago-pipe';
import {GoogleMaps, GoogleMap} from '@ionic-native/google-maps';
import { SocialSharing } from '@ionic-native/social-sharing';
import { SpeechRecognition } from '@ionic-native/speech-recognition';


// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function provideSettings(storage: Storage) {
  /**
   * The Settings provider takes a set of default settings for your app.
   *
   * You can add new settings options at any time. Once the settings are saved,
   * these values will not overwrite the saved values (this can be done manually if desired).
   */
  return new Settings(storage, {
    option1: true,
    option2: 'Ionitron J. Framework',
    option3: '3',
    option4: 'Hello'
  });
}

@NgModule({
  declarations: [
    MyApp,
    TextlimitPipe
    
    //FoundReportPage
  ],
  imports: [
    BrowserModule,
    HttpModule,

    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  //FoundReportPage
  ],
  providers: [
    FundraiserService,
    DonationService,
    
    SpeechRecognition,
    Api,
    Items,
    FoundReports,
    User,
    Camera,
    GoogleMaps,
    SocialSharing,
    SplashScreen,
    Geolocation,
    NativeGeocoder,
    StatusBar,
    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
