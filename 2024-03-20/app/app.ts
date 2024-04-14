import Fastify, { FastifyInstance, FastifyReply } from "fastify"
import plugin from "@fastify/postgres"
import "reflect-metadata"
import { AppDataSource } from "./src/config/data-source";
import healthRoute from "./src/routes/healthRoute";
import usuarioRoute from "./src/routes/usuarioRoute";
import tarefaRoute from "./src/routes/tarefaRoute";
import categoriaRoute from "./src/routes/categoriaRoute";
import { FastifyRequest } from "fastify/types/request";

const databaseUrl = process.env.DATABASE_URL;
export const SERVER_KEY = "SUPERSECRETAPIKEY"

class App {
    public fastifyInstance: FastifyInstance;

    constructor() {
        this.fastifyInstance = Fastify( {logger: false });
        this.configureDatabase(this.fastifyInstance);
        this.configureRoutes(this.fastifyInstance);
        this.configureContentType(this.fastifyInstance);
        this.configureAPIAuthentication(this.fastifyInstance);
    }

    async configureDatabase(app: FastifyInstance) {
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

    configureContentType(app: FastifyInstance) {
        app.addHook('onSend', (request, reply, payload, done) => {
            if (reply.getHeader('Content-Type') === 'application/json') {
                reply.header('Content-Type', 'application/json');
            }
            done();
        });
    }

    configureAPIAuthentication(app: FastifyInstance) {
        app.addHook('preHandler', (request: FastifyRequest, reply: FastifyReply, done) => {
            if (request.url === '/usuario/login/') {
                return done();
            }
            const authHeader = request.headers['x-api-key'];

            if (!authHeader || authHeader !== SERVER_KEY) {
                reply.code(401).send({ error: 'Unauthorized' });
                return done(new Error('Unauthorized'));
            }

            done();
        });
    }
}

export default new App().fastifyInstance;