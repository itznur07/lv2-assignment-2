interface TFullName {
  firstName: string;
  lastName: string;
}

interface TAddress {
  street: string;
  city: string;
  country: string;
}

// type Order = [
//   {
//     productName: string;
//     price: number;
//     quantity: number;
//   },
// ];

export interface TUser {
  userId: number;
  username: string;
  password: string;
  fullName: TFullName;
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: TAddress;
  // orders?: Order;
}
