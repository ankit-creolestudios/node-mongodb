"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirstRoutes = void 0;
class FirstRoutes {
    routes(app) {
        app.get("/api/first", (req, res) => {
            res.status(200).json({ message: "retrieve data successfully" });
        });
        app.post("/api/first", (req, res) => {
            res.status(200).json({ message: "send data successfully" });
        });
    }
}
exports.FirstRoutes = FirstRoutes;
