import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppMiddleware } from './app.middleware';
import { ScrappingModule } from './scrapping/scrapping.module';

@Module({
  imports: [ScrappingModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AppMiddleware).forRoutes('*');
  }
}
