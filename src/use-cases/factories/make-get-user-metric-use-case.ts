import { PrismaCheckInsRepository } from "@/repositories/prisma/prisma-check-ins-repository";

import { GetUserMetricsUseCase } from "../get-user-metrics";

export function makeGetUserMetricsUseCase() {
  const checkInSRepository = new PrismaCheckInsRepository();
  const useCase = new GetUserMetricsUseCase(checkInSRepository);

  return useCase;
}
