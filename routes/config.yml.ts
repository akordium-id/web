import { Handlers } from "$fresh/server.ts";
import { serveFile } from "$std/http/file_server.ts";

export const handler: Handlers = {
  GET(req) {
    // Redirect to the static config.yml file
    return new Response(null, {
      status: 307,
      headers: {
        Location: "../static/admin/config.yml",
      },
    });
  },
};