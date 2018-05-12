import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

import { AppComponent } from './app.component';
import { MobileComponent } from './mobile/mobile.component';
import { TvComponent } from './tv/tv.component';
import { AcComponent } from './ac/ac.component';

const routes: Routes = [
  {
    path: 'mobile',
    component: MobileComponent
  },
  {
    path: 'tv',
    component: TvComponent
  },
  {
    path: 'ac',
    component: AcComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MobileComponent,
    TvComponent,
    AcComponent
  ],
  imports: [
    BrowserModule,
    SlimLoadingBarModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
