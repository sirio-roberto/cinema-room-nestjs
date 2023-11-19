import { Injectable } from '@nestjs/common';
import { Room } from './entities/room.entity';
import { Seat } from './entities/seat.entity';

@Injectable()
export class SeatsService {
  private readonly rows = 9;
  private readonly columns = 9;
  private room = new Room(this.rows, this.columns);
  private boughtTickets: Seat[] = [];

  findAll() {
    return this.room;
  }

  purchaseTicket(seat: Seat) {
    const boughtTicket = this.room.seats.filter(
      (s) => s.row === seat.row && s.column === seat.column,
    )[0];
    this.boughtTickets.push(boughtTicket);
    return boughtTicket;
  }
}
