import { useState, type ImgHTMLAttributes, type SyntheticEvent } from "react";
import {
  getAssetUrl,
  getFallbackAssetUrl,
  hasFallbackAssetUrl,
  logImageLoadFailure,
} from "@/lib/asset-url";

export type AssetPointer = {
  url: string;
};

type ResponsiveSource = {
  src: AssetPointer;
  width: number;
};

type ResponsiveAssetImageProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "src" | "srcSet" | "sizes"
> & {
  src: AssetPointer;
  sources?: ResponsiveSource[];
  sizes?: string;
  pictureClassName?: string;
};

export function ResponsiveAssetImage({
  src,
  sources = [],
  sizes,
  pictureClassName,
  loading = "lazy",
  decoding = "async",
  onError,
  ...imgProps
}: ResponsiveAssetImageProps) {
  const [useFallback, setUseFallback] = useState(false);
  const toUrl = useFallback ? getFallbackAssetUrl : getAssetUrl;
  const srcSet = sources.map((source) => `${toUrl(source.src.url)} ${source.width}w`).join(", ");

  function handleError(event: SyntheticEvent<HTMLImageElement, Event>) {
    const failingUrl = event.currentTarget.currentSrc || event.currentTarget.src;
    const fallbackUrl = getFallbackAssetUrl(src.url);
    logImageLoadFailure(failingUrl, fallbackUrl);

    if (!useFallback && hasFallbackAssetUrl(src.url)) {
      setUseFallback(true);
    }

    onError?.(event);
  }

  return (
    <picture className={pictureClassName}>
      {srcSet && <source type="image/webp" srcSet={srcSet} sizes={sizes} />}
      <img
        src={toUrl(src.url)}
        loading={loading}
        decoding={decoding}
        onError={handleError}
        {...imgProps}
      />
    </picture>
  );
}