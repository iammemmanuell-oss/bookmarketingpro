import { createFileRoute } from "@tanstack/react-router";

const ASSET_HOST = "https://bookmarketingpro.lovable.app";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With, Accept, Origin",
  "Access-Control-Max-Age": "86400",
} as const;

export const Route = createFileRoute("/__l5e/$")({
  server: {
    handlers: {
      OPTIONS: async () => new Response(null, { status: 204, headers: CORS_HEADERS }),
      HEAD: async ({ params }) => proxyAsset(params._splat ?? "", "HEAD"),
      GET: async ({ params }) => proxyAsset(params._splat ?? "", "GET"),
    },
  },
});

async function proxyAsset(path: string, method: "GET" | "HEAD") {
  const assetPath = path.replace(/^\/+/, "");
  const assetUrl = `${ASSET_HOST}/__l5e/${assetPath}`;
  const upstream = await fetch(assetUrl, { method });
  const headers = new Headers(upstream.headers);

  Object.entries(CORS_HEADERS).forEach(([key, value]) => headers.set(key, value));
  headers.set("Cache-Control", "public, max-age=31536000, immutable");

  return new Response(method === "HEAD" ? null : upstream.body, {
    status: upstream.status,
    statusText: upstream.statusText,
    headers,
  });
}