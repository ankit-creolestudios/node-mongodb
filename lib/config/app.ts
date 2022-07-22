import * as express from "express";
import * as bodyParser from "body-parser";
import { FirstRoutes } from "../routes/first-route";
import { CommonRoutes } from "../routes/common-route";
import env from "../environment";
import mongoose from "mongoose";
import { UserRoute } from "../routes/user-route";

class App {
  public app: express.Application;
  public mongoUri: string = `mongodb+srv://root:root@cluster0.7xtiglz.mongodb.net/${env.getDBName()}?retryWrites=true&w=majority`;
  private firstRoute: FirstRoutes = new FirstRoutes();
  private customErrorRoute: CommonRoutes = new CommonRoutes();
  private userRoute: UserRoute = new UserRoute();
  constructor() {
    this.app = express();
    this.config();
    this.mongoSetUp();
    this.firstRoute.routes(this.app);
    // this.customErrorRoute.routes(this.app);
    this.userRoute.routes(this.app);
  }
  private config(): void {
    // application/json type post data
    this.app.use(bodyParser.json());

    // application/x-www-form-encoded post data
    this.app.use(bodyParser.urlencoded());
  }
  private mongoSetUp(): void {
    mongoose.connect(this.mongoUri).then(() => {
      console.log("db connect ");
    });
  }
}
export default new App().app;
