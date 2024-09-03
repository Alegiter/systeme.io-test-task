import { z } from "zod";

export type Product = z.infer<typeof ProductSchema>

export const ProductSchema = z.object({
  id: z.number(),
  name: z.string(),
  options: z.object({
    size: z.string(),
    amount: z.number(),
  }),
  active: z.boolean(),
  createdAt: z.string().transform((dateString) => new Date(dateString))
})

export const ProductArraySchema = z.array(ProductSchema)

const PRODUCTS = [
  {
    id: 14381328,
    name: "id quis voluptate nostrud",
    options: {
      size: "XL",
      amount: 100,
    },
    active: true,
    createdAt: "1985-08-09T02:10:18.0Z",
  },
  {
    id: 26785188,
    name: "esse elit",
    options: {
      size: "S",
      amount: 10,
    },
    active: true,
    createdAt: "1956-03-20T08:59:40.0Z",
  },
  {
    id: 63878634,
    name: "enim",
    options: {
      size: "L",
      amount: 20,
    },
    active: false,
    createdAt: "2016-07-27T16:05:57.0Z",
  },
  {
    id: 79901249,
    name: "eu ad",
    options: {
      size: "XXL",
      amount: 1000,
    },
    active: true,
    createdAt: "1988-08-20T03:53:24.0Z",
  },
  {
    id: 53113051,
    name: "proident ipsum",
    options: {
      size: "XL",
      amount: 4,
    },
    active: true,
    createdAt: "2003-01-19T20:09:29.0Z",
  },
  {
    id: 49132779,
    name: "aliqua adipisicing",
    options: {
      size: "S",
      amount: 22,
    },
    active: false,
    createdAt: "2003-06-14T02:44:44.0Z",
  },
  {
    id: 12135250,
    name: "dolor non in sunt",
    options: {
      size: "M",
      amount: 11,
    },
    active: true,
    createdAt: "2000-08-04T19:49:04.0Z",
  },
  {
    id: 47196404,
    name: "dolor culpa in cupidatat",
    options: {
      size: "S",
      amount: 1,
    },
    active: false,
    createdAt: "2003-11-15T23:56:45.0Z",
  },
  {
    id: 5112903,
    name: "sunt amet do eu ipsum",
    options: {
      size: "L",
      amount: 10,
    },
    active: false,
    createdAt: "1968-09-24T22:07:21.0Z",
  },
  {
    id: 32497729,
    name: "eiusmod",
    options: {
      size: "XXL",
      amount: 0,
    },
    active: true,
    createdAt: "2012-09-24T01:42:32.0Z",
  },
];

export type PricePlan = z.infer<typeof PricePlanSchema>;

export const PricePlanSchema = z.object({
  id: z.number(),
  description: z.string(),
  active: z.boolean(),
  createdAt: z.string().transform((dateString) => new Date(dateString)),
  removedAt: z.string().transform((dateString) => new Date(dateString)),
});

export const PricePlanArraySchema = z.array(PricePlanSchema);

const PRICE_PLANS = [
  {
    id: 13334466,
    description: "aute fugiat commodo id",
    active: false,
    createdAt: "1949-06-21T14:03:32.0Z",
    removedAt: "1960-09-22T13:43:32.0Z",
  },
  {
    id: 38738895,
    description: "esse dolore cillum anim",
    active: false,
    createdAt: "2014-09-09T02:06:07.0Z",
    removedAt: "2006-06-14T18:43:22.0Z",
  },
  {
    id: 69423742,
    description: "ullamco quis aliquip laborum",
    active: false,
    createdAt: "1982-10-18T01:51:07.0Z",
    removedAt: "1978-03-15T11:19:21.0Z",
  },
  {
    id: 78413703,
    description: "nulla elit anim mollit occaecat",
    active: false,
    createdAt: "1959-07-30T18:57:54.0Z",
    removedAt: "1980-01-31T01:46:32.0Z",
  },
  {
    id: 51092826,
    description: "pariatur elit voluptate",
    active: false,
    createdAt: "1976-09-08T02:38:21.0Z",
    removedAt: "1995-06-28T23:17:24.0Z",
  },
  {
    id: 92933022,
    description: "ad cillum proident",
    active: true,
    createdAt: "1975-02-06T15:44:29.0Z",
    removedAt: "1970-05-24T23:08:27.0Z",
  },
  {
    id: 54507439,
    description: "nisi eiusmod",
    active: true,
    createdAt: "1960-07-01T06:17:05.0Z",
    removedAt: "1993-01-08T23:40:57.0Z",
  },
  {
    id: 39230580,
    description: "do in elit sit dolor",
    active: true,
    createdAt: "1984-10-02T14:32:01.0Z",
    removedAt: "1985-09-30T09:48:12.0Z",
  },
  {
    id: 99000859,
    description: "reprehenderit exercitation Duis non",
    active: false,
    createdAt: "1977-07-05T09:58:14.0Z",
    removedAt: "1991-07-12T09:30:12.0Z",
  },
  {
    id: 74826040,
    description: "dolor ullamco fugiat incididunt in",
    active: false,
    createdAt: "2004-12-10T22:13:28.0Z",
    removedAt: "2021-09-09T11:21:13.0Z",
  },
];

export const db = {
    products: {
      find(q: string | null) {
        if (!q) {
          return PRODUCTS
        }
        return PRODUCTS.filter((product) => product.name.includes(q))
      },
      findById(id: number) {
        return PRODUCTS.find((product) => product.id === id)
      }
    },
    pricePlans: {
      find(q: string | null) {
        if (!q) {
          return PRICE_PLANS;
        }
        return PRICE_PLANS.filter((product) => product.description.includes(q));
      },
      findById(id: number) {
        return PRICE_PLANS.find((product) => product.id === id);
      },
    }
};
