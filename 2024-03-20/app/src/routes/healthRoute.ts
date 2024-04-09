import { FastifyInstance } from "fastify";

export default function healthRoute(app: FastifyInstance) {
    // GET HEALTH CHECK
    app.get('/', async (request, reply) => {
        reply.send( { "message": "It's Alive!"})
    })
}