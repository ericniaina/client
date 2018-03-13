import { Injectable, EventEmitter } from '@angular/core';
import * as Colyseus from "colyseus.js";
import { PlacementMessage } from '../message/placementMessage';

const HOST = "ws://localhost:2657";
const ROOM = "game";

@Injectable()
export class GameMessageService {

  client: Colyseus.Client;
  room: Colyseus.Room;

  messageUpdated: EventEmitter<string>;
  playerPlaced: EventEmitter<PlacementMessage>;


  constructor() {
    this.messageUpdated = new EventEmitter<string>();
    this.playerPlaced = new EventEmitter<PlacementMessage>();
    this.client = new Colyseus.Client(HOST);
    this.room = this.client.join(ROOM);
    this.room.onJoin.add(function (data) {
      console.log("joined");
    });

    this.room.onUpdate.addOnce(function (state) {
      console.log("initial room data:", state);
    });

    // new room state
    this.room.onUpdate.add(function (state) {
      // this signal is triggered on each patch
    });

    // listen to patches coming from the server
    this.room.listen("messages/:number", (change) => {
      this.messageUpdated.emit(change.value);
    });

    this.room.listen(function (change) {
      console.log("patch:", change.path, change.operation, change.value);
      if (change.path.players) {
        
      }
    });

    // Place player on position
    this.room.listen("positions/:position", (change) => {
      this.playerPlaced.emit(new PlacementMessage(change.operation, change.path.position, change.value)
    });
  }

  joinPosition(positionString: string) {
    this.room.send({ join: true, position: positionString });
  }

  send(messageInput: string) {
    this.room.send({ message: messageInput });
  }

}
