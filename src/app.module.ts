import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppointmentsModule } from './appointments/appointments.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.MONGODB_URI || 'mongodb://adminUser:Password123@localhost:27017/Project1?authSource=admin'
    ),
    AppointmentsModule, // import module เข้ามาแค่นี้ก็พอ
  ],
  controllers: [AppController], // Controller ของ Appointments จะถูกดึงมาจาก AppointmentsModule แล้ว
  providers: [AppService], // Service ของ Appointments จะถูกดึงมาจาก AppointmentsModule แล้ว
})
export class AppModule {}