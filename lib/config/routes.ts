import { Request, Response } from "express";
import { NodesController } from "../controller/HelloController";

export class Routes {
  public nodesController: NodesController = new NodesController();

  public routes(app): void {
    // ...
    app.route("/nodes").get(this.nodesController.index);
  }
}