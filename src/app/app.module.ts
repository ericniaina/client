import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GameMessageService } from './services/game-message.service';
import { GameComponent } from './game/game/game.component';
import { AvatarComponent } from './game/avatar/avatar/avatar.component';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    AvatarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GameMessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
