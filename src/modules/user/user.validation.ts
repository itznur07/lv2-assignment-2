import z from 'zod';

const fullNameSchemaValidation = z.object({
  firstName: z.string(),
  lastName: z.string(),
});

const addressSchemaValidation = z.object({
  street: z.string(),
  city: z.string(),
  country: z.string(),
});

// const orderSchemaValidation = z.object({
//   productName: z.string(),
//   price: z.number(),
//   quantity: z.number(),
// });

export const userSchemaValidation = z.object({
  userId: z.number(),
  username: z.string(),
  fullName: fullNameSchemaValidation,
  age: z.number(),
  email: z.string(),
  password: z.string(),
  isActive: z.boolean(),
  hobbies: z.array(z.string()),
  address: addressSchemaValidation,
  // orders: z.array(orderSchemaValidation).optional(),
});
