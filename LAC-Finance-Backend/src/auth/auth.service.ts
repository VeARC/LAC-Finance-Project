import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Users } from 'src/entities/users.entity';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  generateToken(payload: Users): string {
    return this.jwtService.sign(payload);
  }
}
