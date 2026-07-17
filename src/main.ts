import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'; // 1. นำเข้า ConfigModule
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppointmentsModule } from './appointments/appointments.module';

@Module({
  imports: [
    // 2. ใส่ ConfigModule ไว้บนสุด และบอกให้มันอ่านไฟล์ .env.local
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env.local',
    }),
    MongooseModule.forRoot(
      process.env.MONGODB_URI || 'mongodb+srv://pattanun:Password123@simpledata.8psx3qd.mongodb.net/appointify_db?appName=simpledata'
    ),
    AppointmentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}