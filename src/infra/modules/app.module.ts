import { Module } from '@nestjs/common';
import { AppController } from '../http/app.controller';
import { AppService } from '../../application/services/app.service';
import { PrismaService } from '../config/prisma';

import { RedisService } from '../config/redis';
import { RedisUserRepository } from 'src/application/repositories/cache/redis-user-repository';
import { UserRepository } from 'src/application/repositories/user-repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    RedisService,
    {
      provide: UserRepository,
      useClass: RedisUserRepository,
    },
  ],
})
export class AppModule {}
