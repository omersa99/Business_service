import { Module } from "@nestjs/common";
import { BusinessModuleBase } from "./base/business.module.base";
import { BusinessService } from "./business.service";
import { BusinessController } from "./business.controller";

@Module({
  imports: [BusinessModuleBase],
  controllers: [BusinessController],
  providers: [BusinessService],
  exports: [BusinessService],
})
export class BusinessModule {}
