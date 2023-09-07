import { User } from 'src/domain/entities/user';

export abstract class UserRepository {
  abstract findMany(): Promise<User[]>;
}
