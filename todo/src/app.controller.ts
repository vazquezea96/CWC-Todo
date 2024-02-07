import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/name')
  async createName(@Body('name') name: string) {
    console.log('NAME', name);
    const names = await this.appService.createName(name);
    return names;
  }

  @Get('/names')
  async getAllNames(): Promise<User[]> {
    return await this.appService.getAllNames();
  }
}
