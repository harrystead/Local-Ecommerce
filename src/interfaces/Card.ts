export interface ICard {
  ProductNo: string;
  Title: string;
  Description: string;
  Price: IPrice;
  ProductImage: IProductImage;
  Reviews: IReviews;
}

interface IProductImageLink {
  Href: string;
  Method: string;
  Rel: string;
  Title: string;
}

interface IProductImage {
  Link: IProductImageLink;
  MimeType: string;
}

interface IPrice {
  Value: number;
  Currency: string;
}

interface IReviews {
  AverageStarReviewRating: number;
  ReviewCount: number;
}
