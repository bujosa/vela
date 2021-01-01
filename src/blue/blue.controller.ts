import { Body, Controller, Get, Post } from '@nestjs/common';
import { BlueService } from './blue.service';
import { CreateColorDto } from './dtos/create-color.dto';
import { Blue } from './entity/blue.entity';

@Controller('blue')
export class BlueController {
  constructor(private blueService: BlueService) {}

  @Get()
  public async getAllColors(): Promise<Blue[]> {
    return this.blueService.getAllColors();
  }

  @Post()
  public async createColor(
    @Body('createColorDto') createColorDto: CreateColorDto,
  ): Promise<Blue> {
    return this.blueService.createColor(createColorDto);
  }

  // This is a simple project about simple api
  // + Mongodb
  // + typeorm
}
