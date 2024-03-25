import Fastify, { FastifyInstance } from "fastify"
import plugin from "@fastify/postgres"
import healthRoute from './src/routes/healthRoute'
import usuarioRoute from "./src/routes/usuarioRoute";
import categoriaRoute from "./src/routes/categoriaRoute";

const databaseUrl = process.env.DATABASE_URL;

class App {
    public fastifyInstance: FastifyInstance;

    constructor() {
        this.fastifyInstance = Fastify( {logger: true });
        this.configureDatabase(this.fastifyInstance);
        this.configureRoutes(this.fastifyInstance);
        this.configureMiddleware(this.fastifyInstance);
    }

    configureDatabase(app: FastifyInstance) {
        app.register(plugin, { connectionString: databaseUrl });
    }

    configureRoutes(app: FastifyInstance) {
        healthRoute(app);
        usuarioRoute(app);
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