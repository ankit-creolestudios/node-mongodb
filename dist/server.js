"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const environment_1 = require("./environment");
const app_1 = require("./config/app");
const PORT = environment_1.default.getPort();
app_1.default.listen(PORT, () => {
    console.log("Express listening port " + PORT);
});
