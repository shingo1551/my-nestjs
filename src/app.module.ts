import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { CatsController } from './controllers/cats.controller';

import { AppService } from './app.service';
import { PostService } from './services/post.service';
import { PrismaService } from './services/prisma.service';
import { UserService } from './services/user.service';

@Module({
  imports: [],
  controllers: [AppController, CatsController],
  providers: [AppService, PostService, PrismaService, UserService],
})
export class AppModule { }
