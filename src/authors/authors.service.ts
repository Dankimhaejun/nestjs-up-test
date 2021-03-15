import { Injectable } from '@nestjs/common/decorators';
import { Author } from './models/author.model';

@Injectable()
export class AuthorsService {
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */

  async findAll(): Promise<Author[]> {
    console.log('"hi" :>> ', 'hi');
    return [] as Author[];
  }
}
