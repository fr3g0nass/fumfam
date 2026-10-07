import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import helmet from 'helmet';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const config = app.get(ConfigService);
    app.use(helmet());
    app.enableCors({
        origin: config.get('CORS_ORIGIN')?.split(',') || '*',
    });
    app.setGlobalPrefix(config.get('API_PREFIX') || 'api/v1');
    app.useGlobalPipes(new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    const port = config.get('PORT') || 3000;
    await app.listen(port);
    console.log(`API running on port ${port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map