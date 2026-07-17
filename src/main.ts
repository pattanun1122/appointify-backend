import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config'; // 1. นำเข้า ConfigService เพิ่ม
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppointmentsModule } from './appointments/appointments.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env.local', // ใช้ในเครื่องตัวเอง (Local)
    }),
    
    // 2. เปลี่ยนเป็น forRootAsync เพื่อให้โหลดค่าจาก ConfigService ได้อย่างถูกต้องและปลอดภัย
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI') || 'mongodb+srv://pattanun:Password123@simpledata.8psx3qd.mongodb.net/appointify_db?appName=simpledata',
      }),
    }),
    
    AppointmentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}