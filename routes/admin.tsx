import { Handlers } from "$fresh/server.ts";
import { serveFile } from "$std/http/file_server.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    // Serve the admin index.html file
    const filePath =
      new URL("../static/admin/index.html", import.meta.url).pathname;
    return await serveFile(req, filePath);
  },
};

// This component won't be used since we're serving a static file
export default function AdminPage() {
  return null;
}
