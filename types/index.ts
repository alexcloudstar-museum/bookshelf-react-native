export type BookType = {
  id: string;
  imageSource: string;
  title: string;
  rating: number;
  reviews: ReviewType[];
};

export type ReviewType = {
  id: string;
  title: string;
  username: string;
};
