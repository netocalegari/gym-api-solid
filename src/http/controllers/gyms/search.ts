import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

import { makeSearchGymsUseCase } from "@/use-cases/factories/make-search-gyms-use-case";

export async function search(req: FastifyRequest, res: FastifyReply) {
  const searchGymsQuerySchema = z.object({
    query: z.string(),
    page: z.coerce.number().min(1).default(1),
  });

  const { query, page } = searchGymsQuerySchema.parse(req.body);

  const searchGymUseCase = makeSearchGymsUseCase();

  const { gyms } = await searchGymUseCase.execute({
    query,
    page,
  });

  return res.status(201).send({ gyms });
}
