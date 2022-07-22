import { Application, Request, Response } from "express";
import { UserController } from "../controller/userController";
export class UserRoute {
  private userController: UserController = new UserController();
  public routes(app: Application) {
    app.post("/api/user", (req: Request, res: Response) => {
      this.userController.createUser(req, res);
    });
    app.get("/api/user/:id", (req: Request, res: Response) => {
      this.userController.retrieveUser(req, res);
    });
    app.put("/api/user/:id", (req: Request, res: Response) => {
      this.userController.updateUser(req, res);
    });
    app.delete("/api/user/:id", (req: Request, res: Response) => {
      this.userController.removeUser(req, res);
    });
  }
}
