import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppointmentsModule } from './appointments/appointments.module';

@Module({
  imports: [
    // เชื่อมต่อไปยัง MongoDB ในเครื่องคอมพิวเตอร์ของเราเอง
    MongooseModule.forRoot('mongodb://adminUser:Password123@localhost:27017/Project1?authSource=admin'),
    AppointmentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}