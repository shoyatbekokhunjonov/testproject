import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AdminModuleService } from "./adminmodule.service";
import { ClientOutput } from "../adminModule/ClientOutput";

@swagger.ApiTags("adminModules")
@common.Controller("adminModules")
export class AdminModuleController {
  constructor(protected readonly service: AdminModuleService) {}

  @common.Get("/clients")
  @swagger.ApiOkResponse({
    type: ClientOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async FetchClients(
    @common.Body()
    body: string
  ): Promise<ClientOutput[]> {
        return this.service.FetchClients(body);
      }

  @common.Get("/:id/get-clients")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetClients(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.GetClients(body);
      }
}
