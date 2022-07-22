"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonRoutes = void 0;
class CommonRoutes {
    routes(app) {
        app.all("*", (req, res) => {
            res.status(404).json({ error: true, message: "route not found" });
        });
    }
}
exports.CommonRoutes = CommonRoutes;
