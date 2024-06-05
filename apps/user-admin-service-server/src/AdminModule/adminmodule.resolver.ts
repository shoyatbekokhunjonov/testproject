import * as graphql from "@nestjs/graphql";
import { ClientOutput } from "../adminModule/ClientOutput";
import { AdminModuleService } from "./adminmodule.service";

export class AdminModuleResolver {
  constructor(protected readonly service: AdminModuleService) {}

  @graphql.Query(() => [ClientOutput])
  async FetchClients(
    @graphql.Args()
    args: string
  ): Promise<ClientOutput[]> {
    return this.service.FetchClients(args);
  }

  @graphql.Query(() => String)
  async GetClients(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GetClients(args);
  }
}
