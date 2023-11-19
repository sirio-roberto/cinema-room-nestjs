import { Seat } from './seat.entity';

export class Room {
  rows: number;
  columns: number;
  seats: Seat[];

  constructor(rows: number, columns: number) {
    this.rows = rows;
    this.columns = columns;
    this.seats = this.initSeatsArray();
  }

  initSeatsArray() {
    const seats: Seat[] = [];
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        const price = i <= 3 ? 10 : 8;
        seats.push(new Seat(i + 1, j + 1, price));
      }
    }
    return seats;
  }
}
