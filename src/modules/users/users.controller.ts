import { Controller, Get, Req } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersServive: UsersService) {}

  @Get('/me')
  me(@Req() request: any) {
    return this.usersServive.getUserById(request.userId);
  }
}
