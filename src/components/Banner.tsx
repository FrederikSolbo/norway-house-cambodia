export interface BannerProps {
  image?: string;
  title?: string;
}

export default function Banner({ image, title }: BannerProps) {
  return (
    <div className="banner-band">
      <div
        className={`banner${image ? ' has-image' : ''}`}
        style={image ? { backgroundImage: `url(${image})` } : undefined}
      >
        {title && <h1 className="banner-title">{title}</h1>}
      </div>
    </div>
  );
}
