import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DocServiceBase } from "./base/doc.service.base";

@Injectable()
export class DocService extends DocServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
