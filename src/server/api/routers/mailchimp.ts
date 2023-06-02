/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { z } from "zod";

export const mailchimpRouter = createTRPCRouter({
  subscribe: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
      })
    )
    .mutation(async ({ input }) => {
      const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
      const API_KEY = process.env.MAILCHIMP_API_KEY;
      const DATACENTER = process.env.MAILCHIMP_API_SERVER;

      const response = await fetch(
        `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
        {
          body: JSON.stringify({
            email_address: input.email,
            status: "subscribed",
          }),
          headers: {
            Authorization: `apikey ${API_KEY}`,
            "Content-Type": "application/json",
          },
          method: "POST",
        }
      );

      if (response.status >= 400) {
        const text = await response.text();
        return {
          success: false,
          message: `Failed to subscribe ${input.email} to the newsletter: ${text}`,
        };
      } else {
        return {
          success: true,
          message: `Subscribed ${input.email} to the newsletter`,
        };
      }
    }),
});
