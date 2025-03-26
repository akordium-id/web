import { Handlers } from "$fresh/server.ts";
import { serveFile } from "$std/http/file_server.ts";
import { join } from "$std/path/mod.ts";

export const handler: Handlers = {
  async GET(req, _ctx) {
    // Gunakan path absolut untuk menemukan file static
    const currentDir = new URL(".", import.meta.url).pathname;
    const staticDir = join(currentDir, "../static");
    const filePath = join(staticDir, "admin/index.html");

    try {
      return await serveFile(req, filePath);
    } catch (error) {
      console.error("Error serving admin file:", error);
      return new Response("Admin page not found", { status: 404 });
    }
  },
};

export default function AdminPage() {
  return null;
}
