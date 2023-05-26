import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { z } from "zod";

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
