import { Injectable } from "@nestjs/common";
import { ClientInput } from "../userModule/ClientInput";

@Injectable()
export class UserModuleService {
  constructor() {}
  async CreateClient(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async CreateClientData(args: ClientInput): Promise<ClientInput> {
    throw new Error("Not implemented");
  }
}
