import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const openExecPositionRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.openExecPosition.findMany({
      orderBy: [
        {
          id: "desc",
        },
      ],
    });
  }),
});
