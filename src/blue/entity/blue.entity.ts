import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';
import { IBaseEntity } from '../interfaces/base-entity.interface';
import { IBlue } from '../interfaces/blue-entity.interface';

@Entity()
export class Blue implements IBaseEntity, IBlue {
  @ObjectIdColumn()
  _id: string;
  @PrimaryColumn()
  id: string;
  @Column()
  name: string;
  @Column()
  createdAt: string;
  @Column()
  updatedAt: string;
  @Column({ default: false })
  deleted: string;
}
