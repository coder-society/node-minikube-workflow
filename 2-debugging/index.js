const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
var os = require("os");

const server = new Hapi.Server();

server.connection({
  port: process.env.PORT || 3000,
  host: '0.0.0.0'
});

server.route([{
  method: 'GET',
  path: '/',
  config: {
    handler: (res, reply) => {
      console.log('Hello World route');
      reply('Hello World');
    },
    description: 'Hello World route',
    tags: ['api'],
  },
}, {
  method: 'GET',
  path: '/healthz',
  config: {
    handler: (res, reply) => {
      reply({
        status: 'ok',
        time: +new Date,
        hostname: os.hostname(),
      })
    },
    description: 'Health check route',
    tags: ['api']
  },
}]);

server.register([
  Inert,
  Vision, {
    'register': HapiSwagger,
  }
], (err) => {
  server.start((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Server running at:', server.info.uri);
    }
  });
});

