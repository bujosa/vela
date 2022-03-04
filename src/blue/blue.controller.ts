import { Body, Controller, Get, Post } from '@nestjs/common';
import { BlueService } from './blue.service';
import { CreateColorDto } from './dtos/create-color.dto';
import { GetColorByIdDto } from './dtos/get-color-by-id.dto';
import { UpdateColorDto } from './dtos/update-color.dto';
import { Blue } from './entity/blue.entity';

@Controller('blue')
export class BlueController {
  constructor(private service: BlueService) {}

  @Get()
  public async getAllColors(): Promise<Blue[]> {
    return this.service.getAllColors();
  }

  @Post('/get')
  public async getColorById(
    @Body() getColorByIdDto: GetColorByIdDto,
  ): Promise<Blue> {
    return this.service.getColorById(getColorByIdDto);
  }

  @Post()
  public async createColor(
    @Body() createColorDto: CreateColorDto,
  ): Promise<Blue> {
    return this.service.createColor(createColorDto);
  }

  @Post('/update')
  public async updateColor(
    @Body() updateColorDto: UpdateColorDto,
  ): Promise<Blue> {
    return this.service.updateColor(updateColorDto);
  }

  // This is a simple project about simple api
  // + Mongodb
  // + typeorm
}
