import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Blue } from './entity/blue.entity';
import { v4 as uuid } from 'uuid';
import { CreateColorDto } from './dtos/create-color.dto';

@Injectable()
export class BlueService {
  constructor(
    @InjectRepository(Blue) private blueRepository: Repository<Blue>,
  ) {}

  public async createColor(createColorDto: CreateColorDto): Promise<Blue> {
    const { name } = createColorDto;
    const blue = this.blueRepository.save({
      id: uuid(),
      name: name,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    return blue;
  }

  public async getAllColors(): Promise<Blue[]> {
    return this.blueRepository.find({});
  }
}
