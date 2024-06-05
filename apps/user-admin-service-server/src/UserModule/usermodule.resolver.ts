import * as graphql from "@nestjs/graphql";
import { ClientInput } from "../userModule/ClientInput";
import { UserModuleService } from "./usermodule.service";

export class UserModuleResolver {
  constructor(protected readonly service: UserModuleService) {}

  @graphql.Query(() => String)
  async CreateClient(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CreateClient(args);
  }

  @graphql.Mutation(() => ClientInput)
  async CreateClientData(
    @graphql.Args()
    args: ClientInput
  ): Promise<ClientInput> {
    return this.service.CreateClientData(args);
  }
}
