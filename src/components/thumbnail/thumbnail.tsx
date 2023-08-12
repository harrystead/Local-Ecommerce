import { ReactElement } from 'react';

interface ThumbnailProps {
  href: string;
  alt: string;
  size?: 'default' | 'large';
}

export default function Thumbnail({
  href,
  alt,
  size = 'default',
}: ThumbnailProps): ReactElement | null {
  return href && alt ? (
    <img src={href} alt={alt} className={`thumbnail ${size}`} />
  ) : null;
}
