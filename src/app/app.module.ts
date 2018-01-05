import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { CacheService } from './services/cache.service';
import { HttpClientModule } from '@angular/common/http';
import { NuarCacheService } from './services/nuar-cache.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ NuarCacheService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
