import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WordsComponent } from './words/words.component';
import { TextComponent } from './text/text.component';
import { MessageComponent } from './message/message.component';

import { TransferService } from './transfer.service';

// make test button change on clicking the word instead of on hover
// find word usage for overused unknown words -- ???
// make it recognize forms of a word (-s, -ed, etc.) -- ask if verb or noun, if yes, also check for variations (common ones)
// make it recognize dashes as word breaks -- add to the split function?

@NgModule({
  declarations: [
    AppComponent,
    WordsComponent,
    TextComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TransferService],
  bootstrap: [AppComponent]
})
export class AppModule { }
