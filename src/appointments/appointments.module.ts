import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'; // เพิ่มบรรทัดนี้
import { AppointmentsController } from './appointments.controller';
import { AppointmentsService } from './appointments.service';
import { Appointment, AppointmentSchema } from './schemas/appointment.schema'; // ปรับ path ให้ตรงกับที่เก็บไฟล์ schema ของคุณ

@Module({
  imports: [
    // เพิ่มส่วนนี้เพื่อให้โมดูลรู้จักกับ Schema
    MongooseModule.forFeature([{ name: Appointment.name, schema: AppointmentSchema }]),
  ],
  controllers: [AppointmentsController],
  providers: [AppointmentsService],
  exports: [AppointmentsService], // เพิ่ม exports หากต้องเรียกใช้ Service ในโมดูลอื่น
})
export class AppointmentsModule {}