import type { ImgHTMLAttributes } from "react";

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
  const srcSet = sources.map((source) => `${source.src.url} ${source.width}w`).join(", ");

  return (
    <picture className={pictureClassName}>
      {srcSet && <source type="image/webp" srcSet={srcSet} sizes={sizes} />}
      <img src={src.url} loading={loading} decoding={decoding} {...imgProps} />
    </picture>
  );
}