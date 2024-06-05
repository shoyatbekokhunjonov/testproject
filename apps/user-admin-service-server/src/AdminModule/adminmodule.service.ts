import { Injectable } from "@nestjs/common";
import { ClientOutput } from "../adminModule/ClientOutput";

@Injectable()
export class AdminModuleService {
  constructor() {}
  async FetchClients(args: string): Promise<ClientOutput[]> {
    throw new Error("Not implemented");
  }
  async GetClients(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
