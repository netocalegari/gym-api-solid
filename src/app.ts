import fastify from "fastify";
import { ZodError } from "zod";

import fastifyJwt from "@fastify/jwt";

import { env } from "./env";
import { appRoutes } from "./http/routes";

export const app = fastify();

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
});

app.register(appRoutes);

app.setErrorHandler((error, _, res) => {
  if (error instanceof ZodError) {
    return res
      .status(400)
      .send({ message: "Validation error.", issues: error.format() });
  }

  if (env.NODE_ENV !== "production") {
    console.error(error);
  } else {
    // TODO: Here thre should be a log to an external tool like DataDog/NewRelix/Sentry
  }

  res.status(500).send({ message: "Internal Server Error." });
});
