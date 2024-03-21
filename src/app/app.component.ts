import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  username = 'Eva Čechová';

  reservationArray = [
    {
      name: 'DEV Call',
      time: '12:00 - 13:00',
      date: '07/09/23',
    },
    {
      name: 'Standup',
      time: '13:30 - 13:45',
      date: '07/09/23',
    },
    {
      name: 'Outlook event',
      time: '15:00 - 16:00',
      date: '07/09/23',
    },
  ];
}
