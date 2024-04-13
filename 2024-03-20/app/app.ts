import Fastify, { FastifyInstance } from "fastify"
import plugin from "@fastify/postgres"
import "reflect-metadata"
import { AppDataSource } from "./src/config/data-source";
import healthRoute from "./src/routes/healthRoute";
import usuarioRoute from "./src/routes/usuarioRoute";
import tarefaRoute from "./src/routes/tarefaRoute";
import categoriaRoute from "./src/routes/categoriaRoute";

const databaseUrl = process.env.DATABASE_URL;

class App {
    public fastifyInstance: FastifyInstance;

    constructor() {
        this.fastifyInstance = Fastify( {logger: false });
        this.configureDatabase(this.fastifyInstance);
        this.configureRoutes(this.fastifyInstance);
        this.configureMiddleware(this.fastifyInstance);
    }

    configureDatabase(app: FastifyInstance) {
        AppDataSource.initialize().then(() => {
            console.log("[+] Data Source has been initialized!");}).catch((err) => {
            console.error("[-] Error on data initialization", err);});
    }

    configureRoutes(app: FastifyInstance) {
        healthRoute(app);
        usuarioRoute(app);
        tarefaRoute(app);
        categoriaRoute(app);
    }

    configureMiddleware(app: FastifyInstance) {
        app.addHook('onSend', (request, reply, payload, done) => {
            if (reply.getHeader('Content-Type') === 'application/json') {
                reply.header('Content-Type', 'application/json');
            }
            done();
        });
    }    
}

export default new App().fastifyInstance;