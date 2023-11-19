export class Seat {
  row: number;
  column: number;
  price: number;

  constructor(row: number, column: number, price: number = 0) {
    this.row = row;
    this.column = column;
    this.price = price;
  }
}
