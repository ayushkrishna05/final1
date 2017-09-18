import { RepoDisplayComponent } from './repodisplay.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { KeywordDisplayComponent} from './keyworddisplay.component'


@NgModule({
  declarations: [
    AppComponent,RepoDisplayComponent,KeywordDisplayComponent
  ],
  imports: [
    BrowserModule,HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
