export type productType = {
  id: string;
  name: string;
  create_at: string;
  price: {
    amount: number;
    currency: string;
  };
};
// type props = {
//   data: productType[] | null
// }