import { createTRPCRouter, privateProcedure } from "@/server/api/trpc";
import { users } from "@clerk/nextjs/dist/api";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

export const adminRouter = createTRPCRouter({
  verifyUser: privateProcedure
    .input(
      z.object({
        userId: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const userSubmittingRequest = await users.getUser(ctx.userId);
      if (!userSubmittingRequest.publicMetadata.is_admin_verified) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "You are not authorized to verify users",
        });
      }

      const updateUser = await users.updateUser(input.userId, {
        publicMetadata: {
          is_admin_verified: true,
        },
      });

      if (!updateUser) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to verify user",
        });
      } else {
        return {
          success: true,
          message: `Verified user ${input.userId}`,
        };
      }
    }),

  getAllUsers: privateProcedure.query(async ({ ctx }) => {
    const userSubmittingRequest = await users.getUser(ctx.userId);
    if (!userSubmittingRequest.publicMetadata.is_admin_verified) {
      throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "You are not authorized to view all users",
      });
    }

    const allUsers = await users.getUserList();
    if (!allUsers) {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to get all users",
      });
    } else {
      return allUsers;
    }
  }),
});
