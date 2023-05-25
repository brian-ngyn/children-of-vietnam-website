import { eventRouter } from "./routers/event";
import { openExecPositionRouter } from "./routers/openExecPosition";
import { teamMemberRouter } from "./routers/teamMember";
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
});

// export type definition of API
export type AppRouter = typeof appRouter;
