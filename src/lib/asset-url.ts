const ASSET_HOST = "https://bookmarketingpro.lovable.app";

export function getAssetUrl(url: string) {
  return url;
}

export function getFallbackAssetUrl(url: string) {
  if (url.startsWith("/__l5e/")) {
    return `${ASSET_HOST}${url}`;
  }

  return url;
}

export function hasFallbackAssetUrl(url: string) {
  return url.startsWith("/__l5e/");
}

export function logImageLoadFailure(url: string, fallbackUrl?: string) {
  if (fallbackUrl && fallbackUrl !== url) {
    console.error("Image failed to load. Retrying from Lovable asset host:", {
      failingUrl: url,
      fallbackUrl,
    });
    return;
  }

  console.error("Image failed to load:", { failingUrl: url });
}