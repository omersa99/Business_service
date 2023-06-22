import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DocService } from "./doc.service";
import { DocControllerBase } from "./base/doc.controller.base";

@swagger.ApiTags("docs")
@common.Controller("docs")
export class DocController extends DocControllerBase {
  constructor(
    protected readonly service: DocService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
