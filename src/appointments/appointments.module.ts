import { Module } from '@nestjs/common';
import { AppointmentsController } from './appointments.controller'; // ตรวจสอบว่า Import มาถูกที่
import { AppointmentsService } from './appointments.service';

@Module({
  controllers: [AppointmentsController], // ต้องมีบรรทัดนี้!
  providers: [AppointmentsService],
})
export class AppointmentsModule {}