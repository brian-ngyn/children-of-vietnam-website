import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const teamMemberRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.teamMember.findMany({
      orderBy: [
        {
          id: "asc",
        },
      ],
    });
  }),
});
