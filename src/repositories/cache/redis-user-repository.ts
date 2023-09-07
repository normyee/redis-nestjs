import { Injectable } from '@nestjs/common';
import { UserRepository } from '../user-repository';
import { User } from 'src/domain/entities/user';
import { RedisService } from 'src/infra/config/redis';
import { PrismaService } from 'src/infra/config/prisma';

@Injectable()
export class RedisUserRepository implements UserRepository {
  constructor(
    private readonly redis: RedisService,
    private readonly prisma: PrismaService,
  ) {}
  async findMany(): Promise<User[]> {
    const cachedUsers = await this.redis.get('users');

    if (!cachedUsers) {
      const users = await this.prisma.user.findMany();

      await this.redis.set('users', JSON.stringify(users), 'EX', 15);
      return users;
    }

    return JSON.parse(cachedUsers);
  }
}
