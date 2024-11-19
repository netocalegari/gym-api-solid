import { PrismaCheckInsRepository } from "@/repositories/prisma/prisma-check-ins-repository";

import { FetchUserCheckInHistoryUseCase } from "../fetch-user-check-ins-history";

export function makeFetchUserCheckInsHistoryUseCase() {
  const checkInSRepository = new PrismaCheckInsRepository();
  const useCase = new FetchUserCheckInHistoryUseCase(checkInSRepository);

  return useCase;
}
