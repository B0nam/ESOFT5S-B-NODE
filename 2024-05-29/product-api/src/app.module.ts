import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
import { ProductMiddleware } from './product/middleware/product.middleware';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/nest'), ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ProductMiddleware)
      .forRoutes('products')
  }
}
