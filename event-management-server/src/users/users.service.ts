import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  create(createUserInput: CreateUserInput) {
    this.users.push(createUserInput)
    return createUserInput;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find(user => user.id == id);
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    const userIndex = this.users.findIndex(user => user.id == id)
    const updatedUser = {...this.users[userIndex], ...updateUserInput}
    this.users[userIndex] = updatedUser
    return updatedUser
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
