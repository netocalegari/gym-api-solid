import { GetUserMetricsUseCase } from "../get-user-metrics";
import { PrismaCheckInsRepository } from "@/repositories/prisma/prisma-check-ins-repository";

export function makeUserMetricsUseCase() {
  const checkInSRepository = new PrismaCheckInsRepository();
  const useCase = new GetUserMetricsUseCase(checkInSRepository);

  return useCase;
}
