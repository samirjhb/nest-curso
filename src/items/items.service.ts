/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Items, ItemsDocument } from './schema/items.schema';

@Injectable()
export class ItemsService {
  constructor(
    @InjectModel(Items.name) private itemsModule: Model<ItemsDocument>,
  ) {}

  async create(createItemDto: CreateItemDto) {
    //Todo Dto createItemDto --> Body esto trae la data
    const itemCreated = await this.itemsModule.create(createItemDto);
    return itemCreated;
  }

  async findAll() {
    const list = await this.itemsModule.find({});
    return list;
  }

  async findOne(id: number) {
    const itemsId = await this.itemsModule.findOne();
    return itemsId;
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
