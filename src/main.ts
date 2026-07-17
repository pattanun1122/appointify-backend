import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // 🔓 เปิดสิทธิ์ CORS
  app.enableCors();

  // ✅ แก้ไขส่วนนี้เพื่อให้รันบน Render ได้สำเร็จ:
  // ใช้ process.env.PORT ถ้า Render กำหนดมาให้ แต่ถ้าไม่ใช้ 3005 ตามที่คุณตั้งไว้
  // เพิ่ม '0.0.0.0' เพื่อเปิดให้ Network ภายนอกเข้าถึงได้
  const port = process.env.PORT || 3005;
  await app.listen(port, '0.0.0.0');
}
bootstrap();