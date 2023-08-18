import { z } from "zod";

import { users } from "@clerk/nextjs/dist/api";
import { TRPCError } from "@trpc/server";

import { createTRPCRouter, privateProcedure } from "~/server/api/trpc";
import { prisma } from "~/server/db";

export const adminRouter = createTRPCRouter({
  verifyUser: privateProcedure
    .input(
      z.object({
        userId: z.string(),
      }),
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

  updateTeamMember: privateProcedure
    .input(
      z.object({
        id: z.string(),
        memberName: z.string(),
        memberRole: z.string(),
        memberDescription: z.string(),
        // memberImage: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const userSubmittingRequest = await users.getUser(ctx.userId);
      if (!userSubmittingRequest.publicMetadata.is_admin_verified) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "You are not authorized to update team members",
        });
      }

      if (input) {
        const updateTeamMember = await prisma.teamMember.update({
          where: {
            id: input.id,
          },
          data: {
            memberName: input.memberName,
            memberRole: input.memberRole,
            memberDescription: input.memberDescription,
            // memberImage: input.memberImage,
          },
        });
        if (!updateTeamMember) {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Failed to verify user",
          });
        } else {
          return {
            success: true,
            message: `Updated team member ${input.id}`,
          };
        }
      }
    }),

  newTeamMember: privateProcedure
    .input(
      z.object({
        memberName: z.string(),
        memberRole: z.string(),
        memberDescription: z.string(),
        // memberImage: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const userSubmittingRequest = await users.getUser(ctx.userId);
      if (!userSubmittingRequest.publicMetadata.is_admin_verified) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "You are not authorized to create users",
        });
      }

      if (input) {
        const newTeamMember = await prisma.teamMember.create({
          data: {
            memberName: input.memberName,
            memberRole: input.memberRole,
            memberDescription: input.memberDescription,
            // memberImage: input.memberImage,
          },
        });
        if (!newTeamMember) {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Failed to verify user",
          });
        } else {
          return {
            success: true,
            message: `Created new team member ${newTeamMember.id}`,
          };
        }
      }
    }),

  deleteTeamMember: privateProcedure
    .input(z.string())
    .mutation(async ({ ctx, input }) => {
      const userSubmittingRequest = await users.getUser(ctx.userId);
      if (!userSubmittingRequest.publicMetadata.is_admin_verified) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "You are not authorized to delete team members",
        });
      }

      if (input) {
        const deleteTeamMember = await prisma.teamMember.delete({
          where: {
            id: input,
          },
        });
        if (!deleteTeamMember) {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Failed to verify user",
          });
        } else {
          return {
            success: true,
            message: `Deleted team member ${input}`,
          };
        }
      }
    }),
});
