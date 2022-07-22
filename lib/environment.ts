enum Enviroments {
  loacal_environment = "local",
  dev_environment = "dev",
  prod_environment = "prod",
  qa_environment = "qa",
}

class Environment {
  private environment: String;
  constructor(environment: String) {
    this.environment = environment;
  }
  getPort(): Number {
    if (this.environment === Enviroments.prod_environment) {
      return 8081;
    } else if (this.environment === Enviroments.dev_environment) {
      return 8082;
    }
    if (this.environment === Enviroments.qa_environment) {
      return 8083;
    } else {
      return 5000;
    }
  }
  getDBName(): String {
    if (this.environment === Enviroments.prod_environment) {
      return "db_first_prod";
    } else if (this.environment === Enviroments.dev_environment) {
      return "db_first_dev";
    }
    if (this.environment === Enviroments.qa_environment) {
      return "db_first_qa";
    } else {
      return "db_first_local";
    }
  }
}

export default new Environment(Enviroments.loacal_environment);
