/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UsersDocument } from './schema/users.schema';
import { hash } from 'bcrypt';
@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UsersDocument>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const { password } = createUserDto;
    const plainToHash = await hash(password, 10);
    createUserDto = { ...createUserDto, password: plainToHash };
    const userCreated = await this.userModel.create(createUserDto);

    return userCreated;
  }

  findAll() {
    return this.userModel.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
