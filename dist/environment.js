"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Enviroments;
(function (Enviroments) {
    Enviroments["loacal_environment"] = "local";
    Enviroments["dev_environment"] = "dev";
    Enviroments["prod_environment"] = "prod";
    Enviroments["qa_environment"] = "qa";
})(Enviroments || (Enviroments = {}));
class Environment {
    constructor(environment) {
        this.environment = environment;
    }
    getPort() {
        if (this.environment === Enviroments.prod_environment) {
            return 8081;
        }
        else if (this.environment === Enviroments.dev_environment) {
            return 8082;
        }
        if (this.environment === Enviroments.qa_environment) {
            return 8083;
        }
        else {
            return 5000;
        }
    }
    getDBName() {
        if (this.environment === Enviroments.prod_environment) {
            return "db_first_prod";
        }
        else if (this.environment === Enviroments.dev_environment) {
            return "db_first_dev";
        }
        if (this.environment === Enviroments.qa_environment) {
            return "db_first_qa";
        }
        else {
            return "db_first_local";
        }
    }
}
exports.default = new Environment(Enviroments.loacal_environment);
