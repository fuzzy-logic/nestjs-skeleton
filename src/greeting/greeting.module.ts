import { Module } from '@nestjs/common';
import { ProfessionalGreetingService } from './professional-greeting.service';
import { PersonalGreetingService } from './personal-greeting.service';
import { GREETING_SERVICE } from './greeting-service.interface';
import { GreetingController } from './greeting.controller';

@Module({
  providers: [
    {
      // You can switch useClass to different implementation
      useClass: PersonalGreetingService,
      provide: GREETING_SERVICE
    }
  ],
  controllers: [
    GreetingController
  ]
})
export class GreetingModule {}