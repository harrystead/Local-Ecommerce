import { render, fireEvent } from '@testing-library/react';
import { ICard } from 'interfaces/Card';
import { useNavigate } from 'react-router-dom';
import Card from './card';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('card component', () => {
  const generateMockCard = (overrides: Partial<ICard> = {}): ICard => ({
    ProductNo: '12345',
    ProductImage: {
      Link: {
        Href: 'https://example.com/image.jpg',
        Title: 'Image Title',
        Rel: 'hello',
        Method: 'GET',
      },
      MimeType: 'hello',
    },
    Title: 'Card Title',
    Price: {
      Value: 4.99,
      Currency: '£',
    },
    Description: 'Card Description',
    Reviews: {
      AverageStarReviewRating: 4.0,
      ReviewCount: 3,
    },
    ...overrides,
  });

  const mockNavigate = jest.fn();

  beforeEach(() => {
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
    mockNavigate.mockClear();
  });

  it('renders correctly', () => {
    const mockCard = generateMockCard();
    const { getByRole } = render(<Card card={mockCard} />);
    const cardImage = getByRole('img');

    expect(cardImage).toHaveAttribute('src', mockCard.ProductImage.Link.Href);
    expect(cardImage).toHaveAttribute('alt', mockCard.ProductImage.Link.Title);
  });

  it('calls navigate with correct argument on click', () => {
    const mockCard = generateMockCard();
    const { getByRole } = render(<Card card={mockCard} />);
    const cardImage = getByRole('img');

    fireEvent.click(cardImage);
    expect(mockNavigate).toHaveBeenCalledWith(mockCard.ProductNo);
  });

  it('matches snapshot', () => {
    const mockCard = generateMockCard();
    const { asFragment } = render(<Card card={mockCard} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly with different props', () => {
    const mockCard = generateMockCard({
      ProductNo: '123452',
      ProductImage: {
        Link: {
          Href: 'https://example2.com/image.jpg',
          Title: 'Image Title2',
          Method: 'get',
          Rel: 'hey',
        },
        MimeType: 'dedmed',
      },
    });

    const { getByRole } = render(<Card card={mockCard} />);
    const cardImage = getByRole('img');

    expect(cardImage).toHaveAttribute('src', mockCard.ProductImage.Link.Href);
    expect(cardImage).toHaveAttribute('alt', mockCard.ProductImage.Link.Title);
  });

  it('does not navigate if productNo is not provided', () => {
    const faultyMockCard = generateMockCard({
      ProductNo: '',
    });

    const { getByRole } = render(<Card card={faultyMockCard} />);
    const cardImage = getByRole('img');

    fireEvent.click(cardImage);
    expect(mockNavigate).not.toHaveBeenCalled();
  });

  it('renders without image data', () => {
    const faultyMockCard = generateMockCard({
      ProductImage: {
        Link: {
          Href: '',
          Title: '',
          Method: '',
          Rel: '',
        },
        MimeType: '',
      },
    });

    const { queryByRole } = render(<Card card={faultyMockCard} />);
    const cardImage = queryByRole('img');

    expect(cardImage).toBeNull();
  });
});
