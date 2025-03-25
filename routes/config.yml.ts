import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(req) {
    // Redirect to the static config.yml file
    return new Response(null, {
      status: 307,
      headers: {
        Location: "/admin/config.yml",
      },
    });
  },
};