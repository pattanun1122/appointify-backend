import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AppointmentsService {
  constructor(
    @InjectModel('Appointment') private readonly appointmentModel: Model<any>,
  ) {}

  // 🟢 1. ฟังก์ชันสำหรับดึงข้อมูลนัดหมายทั้งหมด (findAll)
  async findAll(): Promise<any[]> {
    return this.appointmentModel.find().exec();
  }

  // 🟢 2. ฟังก์ชันสำหรับสร้างข้อมูลนัดหมายใหม่ (create)
  async create(createAppointmentDto: any): Promise<any> {
    const newAppointment = new this.appointmentModel({
      ...createAppointmentDto,
      status: 'pending', // ใส่สถานะเริ่มต้นเป็น pending ให้อัตโนมัติ
    });
    return newAppointment.save();
  }

  // 🔴 3. ฟังก์ชันสำหรับลบข้อมูลนัดหมายตาม ID (delete)
  async delete(id: string): Promise<any> {
    const result = await this.appointmentModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException('ไม่พบรายการนัดหมายที่ต้องการลบ');
    }
    return { message: 'ลบรายการสำเร็จ', deletedId: id };
  }
}