import { prisma } from '../../../../../lib/prisma';

export const memberMutations = {
  memberReview: async (_: any, { input }: { input: any }) => {
    const { username, email, phone, age, balance, password, remainingtime } =
      input;
    console.log('Received memberReview mutation with:', {
      username,
      email,
      phone,
      age,
      balance,
      password,
      remainingtime,
    });
    return prisma.member.create({
      data: {
        username,
        email,
        phone,
        age,
        balance,
        password,
        remainingtime,
      },
    });
  },
};
