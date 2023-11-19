import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'App running! You can use the following endpoints: /seats, /purchase, /return, /stats';
  }
}
