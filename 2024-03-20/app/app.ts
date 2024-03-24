import Fastify, { FastifyInstance } from "fastify"
import plugin from "@fastify/postgres"
import healthRoute from './src/routes/healthRoute'

class App {
    public fastifyInstance: FastifyInstance;

    constructor() {
        this.fastifyInstance = Fastify( {logger: true });
        this.configureDatabase(this.fastifyInstance);
        this.configureRoutes(this.fastifyInstance);
    }

    configureDatabase(app: FastifyInstance) {
        app.register(plugin, { connectionString: "postgres://root:Abacate123@0.0.0.0:5432" });
    }

    configureRoutes(app: FastifyInstance) {
        healthRoute(app);
    }
}

export default new App().fastifyInstance;