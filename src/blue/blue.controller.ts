import { Controller, Get } from '@nestjs/common';
import { BlueService } from './blue.service';

@Controller('blue')
export class BlueController {
  constructor(private blueService: BlueService) {}

  @Get()
  getAllColors() {
    return this.blueService.getAllColors();
  }

  // This is a simple project about simple api
  // + Mongodb
  // + typeorm
}
