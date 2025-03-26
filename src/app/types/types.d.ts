export interface Order {
  id: string;
  date: string;
  status: 'successful-payment' | 'pending-payment' | 'failed-payment';
  price: number;
  client: {
    name: string;
    email: string;
    profilePicture: string;
  };
}
