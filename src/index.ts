import * as Sentry from "@sentry/node";
import Fastify from "fastify";
import OpenAI from "openai";

const openAI = new OpenAI({
  apiKey: "example",
});

// You don't need this, I just wanted to make linting happy :)
console.log(openAI.apiKey);

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
