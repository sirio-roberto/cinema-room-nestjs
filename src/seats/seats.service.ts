import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Room } from './entities/room.entity';
import { Seat } from './entities/seat.entity';
import { Ticket } from './entities/ticket.entity';

@Injectable()
export class SeatsService {
  private readonly rows = 9;
  private readonly columns = 9;
  private room = new Room(this.rows, this.columns);
  private boughtTickets: Map<string, Seat> = new Map();

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

    const chosenSeatArray = this.room.seats.filter(
      (s) => s.row === seat.row && s.column === seat.column,
    );

    if (chosenSeatArray.length === 0) {
      throw new HttpException(
        'The ticket has been already purchased!',
        HttpStatus.BAD_REQUEST,
      );
    }

    const chosenSeat = chosenSeatArray[0];

    // save all bought tickets in case users want to return them later
    const ticket = new Ticket(chosenSeat);
    this.boughtTickets.set(ticket.token, ticket.ticket);

    this.room.seats = this.room.seats.filter((s) => s !== chosenSeat);
    return new Ticket(chosenSeat);
  }
}
