import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ArticleComponent} from './article/article.component';
import { CommentComponent } from './comment/comment.component';
import { FormdemoComponent } from './formdemo/formdemo.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    CommentComponent,
    FormdemoComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
