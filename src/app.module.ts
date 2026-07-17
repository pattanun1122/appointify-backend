import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppointmentsModule } from './appointments/appointments.module';

@Module({
  imports: [
    // ระบบจะเลือกใช้ MONGODB_URI จาก .env.local ก่อน ถ้าไม่มีจะใช้ String ด้านหลังแทนครับ
    MongooseModule.forRoot(
      process.env.MONGODB_URI || 'mongodb+srv://pattanun:Password123@simpledata.8psx3qd.mongodb.net/appointify_db?appName=simpledata'
    ),
    AppointmentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}