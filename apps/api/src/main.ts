import { NestFactory } from '@nestjs/core'
import * as cookieParser from 'cookie-parser'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.use(cookieParser())

  const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',')
  app.enableCors({
    origin: allowedOrigins,
    credentials: true,
  })

  await app.listen(3000)
}
bootstrap()
