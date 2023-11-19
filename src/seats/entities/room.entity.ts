import { Seat } from './seat.entity';

export class Room {
  rows: number;
  columns: number;
  seats: Seat[];

  constructor(rows: number, colunms: number) {
    this.rows = rows;
    this.columns = colunms;
    this.seats = this.initSeatsArray();
  }

  initSeatsArray() {
    const seats: Seat[] = [];
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        seats.push(new Seat(i + 1, j + 1));
      }
    }
    return seats;
  }
}
