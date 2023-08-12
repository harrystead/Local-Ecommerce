import { ICard } from 'interfaces/Card';
import { UseQueryResult, useQuery } from 'react-query';
import cardService from 'services/cardService';

export default function useCards(): UseQueryResult<ICard[]> {
  return useQuery('cards', cardService.getCards);
}
