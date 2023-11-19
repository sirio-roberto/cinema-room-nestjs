import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
    if (!seat || seat.row == undefined || seat.column == undefined) {
      throw new HttpException(
        'Missing row or column fields!',
        HttpStatus.BAD_REQUEST,
      );
    }
    if (
      seat.row < 1 ||
      seat.column < 1 ||
      seat.row > this.rows ||
      seat.column > this.columns
    ) {
      throw new HttpException(
        'The number of a row or a column is out of bounds!',
        HttpStatus.BAD_REQUEST,
      );
    }

    const boughtTicket = this.room.seats.filter(
      (s) => s.row === seat.row - 1 && s.column === seat.column - 1,
    )[0];

    if (this.boughtTickets.includes(boughtTicket)) {
      throw new HttpException(
        'The ticket has been already purchased!',
        HttpStatus.BAD_REQUEST,
      );
    }

    this.boughtTickets.push(boughtTicket);
    return boughtTicket;
  }
}
