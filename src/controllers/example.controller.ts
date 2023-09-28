import { Controller, Get, Route } from "tsoa";
import { Group } from "../models/examples";

@Route("example")
export class ExampleController extends Controller {
  @Get("/")
  public async getExample(): Promise<Group> {
    const data: Group = {
      id: "1",
      site: {
        id: "1",
      },
    };
    return data;
  }
}
