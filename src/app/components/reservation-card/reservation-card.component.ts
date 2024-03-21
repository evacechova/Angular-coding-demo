import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reservation-card',
  templateUrl: './reservation-card.component.html',
  styleUrls: ['./reservation-card.component.scss'],
})
export class ReservationCardComponent implements OnInit {
  @Input() reservationData: Object;

  constructor() {}

  ngOnInit() {}
}
