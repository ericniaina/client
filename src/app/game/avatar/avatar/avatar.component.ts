import { Component, OnInit, Input } from '@angular/core';
import { GameMessageService } from '../../../services/game-message.service';
import { PlacementMessage } from '../../../message/placementMessage';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {
  @Input()
  position:string;

  playerId:string;
  constructor(private messageService:GameMessageService) { }

  ngOnInit() {
    this.messageService.playerPlaced.subscribe(
      (placement:PlacementMessage) => {
        if (this.position == placement.position) {
          if(placement.operation == "add") {
            this.playerId = placement.playerId;
          }
          else if (placement.operation == "remove") {
            delete this.playerId;
          }
        }
      }
    );
  }

  onJoin() {
    this.messageService.joinPosition(this.position);
  }

}
