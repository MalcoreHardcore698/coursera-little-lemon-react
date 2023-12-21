export type TDish = {
  _id: string;
  title: string;
  image: string;
  description: string;
  price: number;
};

export type TReservation = {
  _id: string;
  dish: TDish;
  createdAt: string;
};
