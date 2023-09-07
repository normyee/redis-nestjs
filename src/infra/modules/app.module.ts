import { Module } from '@nestjs/common';
import { AppController } from '../http/app.controller';
import { AppService } from '../../application/services/app.service';
import { PrismaService } from '../config/prisma';
import { UserRepository } from '../../repositories/user-repository';
import { RedisService } from '../config/redis';
import { RedisUserRepository } from '../../repositories/cache/redis-user-repository';

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
