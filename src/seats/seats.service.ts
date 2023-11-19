import { Injectable } from '@nestjs/common';
import { Room } from './entities/room.entity';

@Injectable()
export class SeatsService {
  private readonly rows = 9;
  private readonly columns = 9;
  private room = new Room(this.rows, this.columns);

  findAll() {
    return this.room;
  }
}
