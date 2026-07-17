import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';

@Controller('appointments')
export class AppointmentsController {
  constructor(private readonly appointmentsService: AppointmentsService) {}

  // 🟢 เผื่อไว้สำหรับดึงข้อมูลนัดหมายทั้งหมด
  @Get()
  async findAll() {
    return this.appointmentsService.findAll(); // เปลี่ยนเป็นชื่อฟังก์ชันจองจริงของคุณได้ เช่น findAll() หรือ getAppointments()
  }

  // 🟢 เผื่อไว้สำหรับสร้างข้อมูลนัดหมายใหม่
  @Post()
  async create(@Body() createAppointmentDto: any) {
    return this.appointmentsService.create(createAppointmentDto); // เปลี่ยนเป็นชื่อฟังก์ชันสร้างจริงของคุณได้ เช่น create()
  }

  // 🔴 เพิ่ม Endpoint DELETE สำหรับลบข้อมูลนัดหมายตาม ID
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.appointmentsService.delete(id);
  }
}