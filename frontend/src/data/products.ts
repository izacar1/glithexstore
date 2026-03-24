export type Category = 'all' | 'tshirt' | 'hoodie' | 'oversized' | 'cap' | 'case';

export interface Product {
  id: number;
  name: string;
  price: number;
  category: Exclude<Category, 'all'>;
  colors: string[];
  sizes?: string[];
  descriptionKey: string;
  taglineKey?: string;
  images?: string[];
  featured?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Glitch Core Tee',
    price: 29.99,
    category: 'tshirt',
    colors: ['#FFFFFF', '#8B5CF6', '#0A0A0F'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    descriptionKey: 'product_tshirt_desc',
    taglineKey: 'product_1_tagline',
    images: ['/products/glitch_core_front.png', '/products/glitch_core_back.png'],
    featured: true,
  },
  {
    id: 2,
    name: 'Neural Network Tee',
    price: 32.99,
    category: 'tshirt',
    colors: ['#0A0A0F', '#3B82F6'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    descriptionKey: 'product_tshirt_desc',
    taglineKey: 'product_2_tagline',
  },
  {
    id: 3,
    name: 'Neon Rebellion Hoodie',
    price: 49.99,
    category: 'hoodie',
    colors: ['#0A0A0F', '#8B5CF6'],
    sizes: ['S', 'M', 'L', 'XL'],
    descriptionKey: 'product_hoodie_desc',
    taglineKey: 'product_3_tagline',
    featured: true,
  },
  {
    id: 4,
    name: 'Dark Protocol Hoodie',
    price: 54.99,
    category: 'hoodie',
    colors: ['#0A0A0F', '#FFFFFF'],
    sizes: ['S', 'M', 'L', 'XL'],
    descriptionKey: 'product_hoodie_desc',
    taglineKey: 'product_4_tagline',
  },
  {
    id: 5,
    name: 'System Error Oversized',
    price: 44.99,
    category: 'oversized',
    colors: ['#0A0A0F', '#8B5CF6', '#FFFFFF'],
    sizes: ['M', 'L', 'XL', 'XXL'],
    descriptionKey: 'product_oversized_desc',
    taglineKey: 'product_5_tagline',
    featured: true,
  },
  {
    id: 6,
    name: 'Cyber Signal Cap',
    price: 24.99,
    category: 'cap',
    colors: ['#0A0A0F', '#8B5CF6'],
    sizes: [],
    descriptionKey: 'product_cap_desc',
    taglineKey: 'product_6_tagline',
    featured: true,
  },
  {
    id: 7,
    name: 'Matrix Break Case',
    price: 19.99,
    category: 'case',
    colors: ['#0A0A0F'],
    sizes: [],
    descriptionKey: 'product_case_desc',
    taglineKey: 'product_7_tagline',
  },
  {
    id: 8,
    name: 'Ghost Protocol Case',
    price: 22.99,
    category: 'case',
    colors: ['#0A0A0F', '#8B5CF6'],
    sizes: [],
    descriptionKey: 'product_case_desc',
    taglineKey: 'product_8_tagline',
  },
];

export const FEATURED_PRODUCTS = PRODUCTS.filter((product) => product.featured);

export function getProductById(id: string | number) {
  return PRODUCTS.find((product) => String(product.id) === String(id));
}
