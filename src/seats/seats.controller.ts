import { Controller, Get } from '@nestjs/common';
import { SeatsService } from './seats.service';

@Controller('seats')
export class SeatsController {
  constructor(private readonly seatsService: SeatsService) {}

  @Get()
  findAll() {
    return this.seatsService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.seatsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateSeatDto: UpdateSeatDto) {
  //   return this.seatsService.update(+id, updateSeatDto);
  // }
}
