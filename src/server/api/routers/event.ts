import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { z } from "zod";

export const eventRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.event.findMany({
      orderBy: [
        {
          eventDate: "asc",
        },
      ],
    });
  }),
});
