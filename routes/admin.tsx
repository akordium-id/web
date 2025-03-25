import { Handlers } from "$fresh/server.ts";
import { serveFile } from "$std/http/file_server.ts";

export const handler: Handlers = {
  async GET(req, _ctx) {
    // Tangani semua permintaan ke /admin/* dengan mengembalikan index.html
    // Ini penting untuk SPA routing yang digunakan oleh Decap CMS
    const filePath = new URL("admin/index.html", import.meta.url).pathname;
    return await serveFile(req, filePath);
  },
};

export default function AdminPage() {
  return null;
}
