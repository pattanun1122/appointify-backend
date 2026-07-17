import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppointmentsModule } from './appointments/appointments.module'; // import แค่ module ก็พอครับ

@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.MONGODB_URI || 'mongodb://adminUser:Password123@localhost:27017/Project1?authSource=admin'
    ),
    AppointmentsModule, // NestJS จะไปดึง Controller จากภายใน module นี้ให้อัตโนมัติ
  ],
  controllers: [AppController], // ใส่แค่ AppController พอครับ
  providers: [AppService],
})
export class AppModule {}