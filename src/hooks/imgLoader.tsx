const projectId = "tapwfxubfpcauhtwphkr";

interface imageLoaderProps {
  src: string;
  width: number;
  quality?: number;
}

export default function supabaseLoader({
  src,
  width,
  quality,
}: imageLoaderProps) {
  return `https://${projectId}.supabase.co/storage/v1/object/public/${src}?width=${width}&quality=${
    quality || 75
  }`;
}
