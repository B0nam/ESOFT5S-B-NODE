import fastify from "fastify";

fastify.register(requirer('@fastify/postgres'), {
    connectionString: ''
})