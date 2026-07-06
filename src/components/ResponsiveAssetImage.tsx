import type { ImgHTMLAttributes } from "react";
import { getAssetUrl } from "@/lib/asset-url";

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
  ...imgProps
}: ResponsiveAssetImageProps) {
  const srcSet = sources.map((source) => `${getAssetUrl(source.src.url)} ${source.width}w`).join(", ");

  return (
    <picture className={pictureClassName}>
      {srcSet && <source type="image/webp" srcSet={srcSet} sizes={sizes} />}
      <img src={getAssetUrl(src.url)} loading={loading} decoding={decoding} {...imgProps} />
    </picture>
  );
}