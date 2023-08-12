import axios from 'axios';
import { ICard } from 'interfaces/Card';
import { ICardDisplay } from 'interfaces/CardDisplay';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export default {
  async getCards(): Promise<ICard[]> {
    try {
      const { data } = await apiClient.get('/search.json');
      return data.Products;
    } catch (error) {
      console.error('An error occurred while fetching cards:', error);
      throw error;
    }
  },

  async getCardByProductNo(productNo: string): Promise<ICardDisplay> {
    try {
      const { data } = await apiClient.get('');
      return data;
    } catch (error) {
      console.error(
        `An error occurred while fetching the card with product no ${productNo}:`,
        error
      );
      throw error;
    }
  },
};
