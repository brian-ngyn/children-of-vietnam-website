import { eventRouter } from "@/server/api/routers/event";
import { mailchimpRouter } from "@/server/api/routers/mailchimp";
import { openExecPositionRouter } from "@/server/api/routers/openExecPosition";
import { teamMemberRouter } from "@/server/api/routers/teamMember";
import { createTRPCRouter } from "@/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  event: eventRouter,
  openExecPosition: openExecPositionRouter,
  teamMember: teamMemberRouter,
  mailchimp: mailchimpRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
