import { ChangeEvent, ReactElement, useMemo, useState } from 'react';
import Card from 'components/card/card';
import Error from 'components/error/error';
import SearchInput from 'components/searchInput/searchInput';
import Loading from 'components/utilities/loading';
import useCards from 'hooks/useCards';

export default function Home(): ReactElement {
  const [searchTerm, setSearchTerm] = useState('');

  const { data: cards, isLoading, isError } = useCards();

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value);
  };

  const filteredCards = useMemo(
    () => cards?.filter((card) => card.Title.toLowerCase().includes(searchTerm.toLowerCase())),
    [cards, searchTerm]
  );

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error>Error occurred while fetching data</Error>;
  }

  if (!cards || cards.length === 0) {
    return <Error>No cards found</Error>;
  }

  return (
    <div className="container">
      <div className="search-container">
        <SearchInput value={searchTerm} onChange={handleChange} />
      </div>
      <div className="card-container">
        {filteredCards?.map((card) => (
          <Card card={card} key={card.ProductNo} />
        ))}
      </div>
    </div>
  );
}
