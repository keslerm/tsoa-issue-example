import { Controller, Get, Route } from "tsoa";
import { Group } from "../models/examples";

// Uncommenting the import and other controller method will let this build successfully again

//import { ExampleBranch } from "../models/generated";

@Route("example")
export class ExampleController extends Controller {
  /*
  @Get("/test2")
  public async getExample2(): Promise<Array<ExampleBranch>> {

    const data: ExampleBranch = {
        id: "1",
        name: "test",
    };

    return [data];
  }
  */

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
