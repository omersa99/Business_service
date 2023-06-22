import { Module } from "@nestjs/common";
import { DocModuleBase } from "./base/doc.module.base";
import { DocService } from "./doc.service";
import { DocController } from "./doc.controller";

@Module({
  imports: [DocModuleBase],
  controllers: [DocController],
  providers: [DocService],
  exports: [DocService],
})
export class DocModule {}
