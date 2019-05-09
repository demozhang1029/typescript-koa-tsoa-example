import {Get, Route} from 'tsoa';
import {Request, Response} from 'koa';

interface User {
  id: number;
  name: string;
}

@Route('User')
export class UserController {

  @Get('{id}')
  public async getUser(): Promise<User> {
    return null;
  }
}
