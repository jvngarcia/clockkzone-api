import { NestMiddleware, Injectable } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AppMiddleware implements NestMiddleware {
  public use(request: Request, response: Response, next: NextFunction): void {
    // validate apikey in header
    const apikey: string = request.header('x_api_key');

    if (apikey !== '1234') {
      response.status(401).send({
        detail: 'Invalid API key',
      });
      return;
    }

    next();
  }
}
