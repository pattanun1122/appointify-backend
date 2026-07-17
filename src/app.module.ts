import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppointmentsModule } from './appointments/appointments.module';
import { AppointmentsController } from './appointments/appointments.controller'; // เพิ่มบรรทัดนี้
import { AppointmentsService } from './appointments/appointments.service'; // เพิ่มบรรทัดนี้

@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.MONGODB_URI || 'mongodb://adminUser:Password123@localhost:27017/Project1?authSource=admin'
    ),
    AppointmentsModule,
  ],
  controllers: [AppController, AppointmentsController], // เพิ่ม AppointmentsController ตรงนี้
  providers: [AppService, AppointmentsService], // เพิ่ม AppointmentsService ตรงนี้
})
export class AppModule {}