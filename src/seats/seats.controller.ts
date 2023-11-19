import { Body, Controller, Get, Post } from '@nestjs/common';
import { SeatsService } from './seats.service';
import { Seat } from './entities/seat.entity';

@Controller()
export class SeatsController {
  constructor(private readonly seatsService: SeatsService) {}

  @Get('seats')
  findAll() {
    return this.seatsService.findAll();
  }

  @Post('purchase')
  purchase(@Body() seat: Seat) {
    return this.seatsService.purchaseTicket(seat);
  }
}
