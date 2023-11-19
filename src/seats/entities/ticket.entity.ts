import { Seat } from './seat.entity';
import { v4 as uuidv4 } from 'uuid';

export class Ticket {
  token: string;
  ticket: Seat;

  constructor(seat: Seat) {
    this.token = uuidv4();
    this.ticket = seat;
  }
}
