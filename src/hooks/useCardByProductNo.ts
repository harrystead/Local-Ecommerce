import { ICardDisplay } from 'interfaces/CardDisplay';
import { UseQueryResult, useQuery } from 'react-query';
import cardService from 'services/cardService';

export default function useCardByProductNo(
  productNo: string
): UseQueryResult<ICardDisplay> {
  return useQuery(['card', productNo], () => cardService.getCardByProductNo(productNo));
}
