import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ReservationCardComponent } from './components/reservation-card/reservation-card.component';
import { MenuComponent } from './components/menu/menu.component';
import { AvailabilityListEntryComponent } from './components/availability-list-entry/availability-list-entry.component';
import { CreateReservationBtnComponent } from './components/create-reservation-btn/create-reservation-btn.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    ReservationCardComponent,
    MenuComponent,
    AvailabilityListEntryComponent,
    CreateReservationBtnComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
