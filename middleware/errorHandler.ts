import { FreshContext } from "$fresh/server.ts";

export interface ErrorResponse {
  status: number;
  message: string;
  stack?: string;
}

export async function errorHandler(
  req: Request,
  ctx: FreshContext,
) {
  try {
    const resp = await ctx.next();
    return resp;
  } catch (e) {
    const err = e as Error & { status?: number };

    console.error(`[REQUEST] ${req.method} ${req.url}`);
    console.error(`[ERROR] ${err.message}`);
    console.error(err.stack);

    const isDevelopment = Deno.env.get("DENO_ENV") === "development";

    const errorResponse: ErrorResponse = {
      status: err.status || 500,
      message: err.message || "Internal Server Error",
      ...(isDevelopment && { stack: err.stack }),
    };

    return new Response(JSON.stringify(errorResponse), {
      status: errorResponse.status,
      headers: { "Content-Type": "application/json" },
    });
  }
}
