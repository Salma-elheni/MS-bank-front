import { Component, OnInit } from '@angular/core';
import { Notification } from 'src/app/core/models/notification.model';
import { WebSocketService } from '../../core/services/websocket.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  public msg: string = "before notification";
  public notification: Notification = null;

  constructor(private webSocketService: WebSocketService) {

    let stompClient = this.webSocketService.connect();

    stompClient.connect({}, frame => {

      stompClient.subscribe('/topic/notification', notification => {
        this.notification = JSON.parse(notification.body);
      })

    });
  }

  ngOnInit() {
  }

}
