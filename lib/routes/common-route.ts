import { Application, Request, Response } from "express";
export class CommonRoutes {
  public routes(app: Application) {
    app.all("*", (req: Request, res: Response) => {
      res.status(404).json({ error: true, message: "route not found" });
    });
  }
}
