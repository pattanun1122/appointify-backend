import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // 🔓 เปิดสิทธิ์ CORS ให้ฝั่ง Next.js (Port 3001) ส่งข้อมูลมาหา NestJS ได้
  app.enableCors();

  // 🔄 เปลี่ยนจากพอร์ต 3000 หนีมาพอร์ต 3005 เพื่อแก้ปัญหาพอร์ตชน (EADDRINUSE)
  await app.listen(3005);
}
bootstrap();