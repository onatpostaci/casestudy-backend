import { Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';

/*
    FAKE USERS FOR TEST PURPOSES
*/

const fakeUsers = [
  {
    id: 1,
    username: 'janedoe',
    password: 'pass123',
  },
  {
    id: 2,
    username: 'thorfinn',
    password: 'vinland1',
  },
];

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  validateUser({ username, password }: AuthPayloadDto) {
    //First, we need to define a lambda function that finds user according to attribute
    const findUser = fakeUsers.find((user) => user.username === username);
    if (!findUser) return false;
    if (password === findUser.password) {
      const { password, ...user } = findUser;
      return this.jwtService.sign(user);
    }
  }
}
