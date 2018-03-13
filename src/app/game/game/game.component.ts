import { Component, OnInit } from '@angular/core';
import { GameMessageService } from '../../services/game-message.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(private gameMessageService:GameMessageService) { }

  ngOnInit() {
    
  }

}
