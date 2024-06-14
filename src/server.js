/*
    Author: Winfrey Nainggolan
*/ 

const Hapi = require('@hapi/hapi');
const routes = require('./routes');

async function start() {
    const server = Hapi.server({
        port: 9000,
        host: 'localhost',
        routes: {
            cors: true
        },
    });

    server.route(routes);
    await server.start();
    console.log(`Server running on ${server.info.uri}`);
}

start();

