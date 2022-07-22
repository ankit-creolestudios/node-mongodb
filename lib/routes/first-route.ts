import { Application, Request, Response } from "express";

export class FirstRoutes {
  public routes(app: Application) {
    app.get("/api/first", (req: Request, res: Response) => {
      res.status(200).json({ message: "retrieve data successfully" });
    });
    app.post("/api/first", (req: Request, res: Response) => {
      res.status(200).json({ message: "send data successfully" });
    });
  }
}
