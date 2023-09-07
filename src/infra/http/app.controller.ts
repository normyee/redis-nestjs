import { Controller, Get } from '@nestjs/common';
import { AppService } from '../../application/services/app.service';
import { User } from '../../domain/entities/user';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/users')
  async getUsers(): Promise<User[]> {
    return await this.appService.getUsers();
  }
}
