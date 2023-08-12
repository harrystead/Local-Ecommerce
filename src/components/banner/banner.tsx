import { ReactElement } from 'react';

interface BannerProps {
  src?: string;
  alt?: string;
  className?: string;
}

export default function Banner({
  src = '',
  alt = '',
  className = '',
}: BannerProps): ReactElement {
  return (
    <div className={className}>
      <img src={src} alt={alt} />
    </div>
  );
}
