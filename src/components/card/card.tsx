import { ReactElement } from 'react';
import Thumbnail from 'components/thumbnail/thumbnail';
import { ICard } from 'interfaces/Card';
import { useNavigate } from 'react-router-dom';

interface CardProps {
  card: ICard;
  onClick?: (productNo: string) => void;
}

export default function Card({ card, onClick }: CardProps): ReactElement {
  const navigate = useNavigate();

  const handleCardClick = (productNo: string): void => {
    if (productNo) {
      navigate(`${productNo}`);
      onClick?.(productNo);
    }
  };

  return (
    <button
      type="button"
      className="card-btn"
      onClick={() => handleCardClick(card.ProductNo)}
      aria-label={card.ProductImage.Link.Title || 'View card'}
    >
      <Thumbnail
        href={card.ProductImage.Link.Href}
        alt={card.ProductImage.Link.Title}
      />
    </button>
  );
}
