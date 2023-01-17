import Fastify from 'fastify';

const app = Fastify();

app.get('/hello', () => {
    return 'Hello NLW SETUP';
});

app.listen({
    port:  3333,
}).then(() => {
    console.log("HTTP Server running!");
});
