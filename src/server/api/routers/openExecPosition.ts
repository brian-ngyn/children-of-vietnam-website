import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { z } from "zod";

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
