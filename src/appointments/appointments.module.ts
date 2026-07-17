import { Module } from '@nestjs/common';
import { AppointmentsController } from './appointments.controller';
import { AppointmentsService } from './appointments.service';

@Module({
  controllers: [AppointmentsController], // ต้องมีบรรทัดนี้ใน AppointmentsModule
  providers: [AppointmentsService],
})
export class AppointmentsModule {}