import { ReactElement } from 'react';
import { Button } from '@mui/material';
import Error from 'components/error/error';
import Thumbnail from 'components/thumbnail/thumbnail';
import Loading from 'components/utilities/loading';
import useCardByProductNo from 'hooks/useCardByProductNo';
import { useParams } from 'react-router-dom';

export default function CardDisplay(): ReactElement {
  const { productNo } = useParams<{ productNo: string }>();

  if (!productNo) {
    return <div />;
  }

  const { data: card, isLoading, isError } = useCardByProductNo(productNo);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error>Error occurred while fetching data</Error>;
  }

  if (!card) {
    return <Error>No card found</Error>;
  }

  return (
    <div className="container-display">
      <div className="left-container">
        <Thumbnail href={card.ThumbnailUrl} alt={card.Title} size="large" />
      </div>
      <div className="right-container">
        <h2>{card.Title}</h2>
        <Button
          className="buy-btn"
          variant="contained"
          size="large"
          onClick={() => alert('Purchased!')}
          aria-label="Buy Me"
        >
          Buy Me
        </Button>
      </div>
    </div>
  );
}
