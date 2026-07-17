import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppointmentsModule } from './appointments/appointments.module';

@Module({
  imports: [
    // 🛠️ แก้ไขให้ดึงค่าจากตัวแปร MONGODB_URI ใน Render (หรือ .env)
    // ถ้าไม่มีจะใช้ค่า fallback ที่คุณเคยตั้งไว้สำหรับรันในเครื่องครับ
    MongooseModule.forRoot(
      process.env.MONGODB_URI || 'mongodb://adminUser:Password123@localhost:27017/Project1?authSource=admin'
    ),
    AppointmentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}