import { HealthCheckResult } from '@nestjs/common';
import { AppService } from './app.service.js';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    healthCheck(): HealthCheckResult;
}
//# sourceMappingURL=app.controller.d.ts.map