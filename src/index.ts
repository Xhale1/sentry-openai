import * as Sentry from "@sentry/node";
import Fastify from "fastify";

const fastify = Fastify();

Sentry.setupFastifyErrorHandler(fastify);

fastify.listen(
  {
    port: 3000,
    host: "0.0.0.0",
  },
  async function (err, address) {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }

    console.log(`Server listening at ${address}`);
  }
);
