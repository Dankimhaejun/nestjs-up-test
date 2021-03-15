import { Query, Resolver } from '@nestjs/graphql/dist/decorators';
import { AuthorsService } from './authors.service';
import { Author } from './models/author.model';

@Resolver(() => Author)
export class AuthorsResolver {
  constructor(private authorsService: AuthorsService) {}

  @Query(() => [Author])
  async authors() {
    return this.authorsService.findAll();
  }
}
