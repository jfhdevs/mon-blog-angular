import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListepostsComponent } from './listeposts/listeposts.component';
import { UnpostComponent } from './unpost/unpost.component';

@NgModule({
  declarations: [
    AppComponent,
    ListepostsComponent,
    UnpostComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
