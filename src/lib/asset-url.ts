const ASSET_HOST = "https://bookmarketingpro.lovable.app";

export function getAssetUrl(url: string) {
  if (url.startsWith("/__l5e/")) {
    return `${ASSET_HOST}${url}`;
  }

  return url;
}