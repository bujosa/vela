import { IUpdateColorDto } from '../interfaces/update-color-dto.interface';

export class UpdateColorDto implements IUpdateColorDto {
  id: string;
  name: string;
}
