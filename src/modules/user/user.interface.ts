interface FullName {
  firstName: string;
  lastName: string;
}

interface Address {
  street: string;
  city: string;
  country: string;
}

type Order = [
  {
    productName: string;
    price: number;
    quantity: number;
  },
];

export interface User {
  userId: number;
  username: string;
  password: string;
  fullName: FullName;
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: Address;
  orders: Order;
}
