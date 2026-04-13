import { prisma } from '../../../../../lib/prisma';

export const memberQueries = {
  members: async () => {
    return prisma.member.findMany({});
  },
};
