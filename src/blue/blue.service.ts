import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Blue } from './entity/blue.entity';
import { v4 as uuid } from 'uuid';
import { CreateColorDto } from './dtos/create-color.dto';
import { UpdateColorDto } from './dtos/update-color.dto';
import { GetColorByIdDto } from './dtos/get-color-by-id.dto';

@Injectable()
export class BlueService {
  constructor(
    @InjectRepository(Blue) private blueRepository: Repository<Blue>,
  ) {}

  public async createColor(createColorDto: CreateColorDto): Promise<Blue> {
    const { name } = createColorDto;

    const blue = this.blueRepository.save({
      id: uuid(),
      name,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    return blue;
  }

  public async getAllColors(): Promise<Blue[]> {
    return this.blueRepository.find({});
  }

  public async getColorById(getColorByIdDto: GetColorByIdDto): Promise<Blue> {
    const { id } = getColorByIdDto;
    return this.blueRepository.findOne({ id });
  }

  public async updateColor(updateColorDto: UpdateColorDto): Promise<Blue> {
    const { id, name } = updateColorDto;
    const color = await this.blueRepository.findOne({ id: id });
    name != undefined ? (color.name = name) : null;
    await this.blueRepository.save(color);
    return color;
  }
}
