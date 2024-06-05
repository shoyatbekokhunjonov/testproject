import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { UserModuleService } from "./usermodule.service";
import { ClientInput } from "../userModule/ClientInput";

@swagger.ApiTags("userModules")
@common.Controller("userModules")
export class UserModuleController {
  constructor(protected readonly service: UserModuleService) {}

  @common.Get("/:id/create-client")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateClient(
    @common.Body()
    body: ClientInput
  ): Promise<string> {
        return this.service.CreateClient(body);
      }

  @common.Post("/client")
  @swagger.ApiOkResponse({
    type: ClientInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateClientData(
    @common.Body()
    body: ClientInput
  ): Promise<ClientInput> {
        return this.service.CreateClientData(body);
      }
}
