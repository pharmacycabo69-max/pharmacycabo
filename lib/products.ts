import raw from '@/data/products.json';

export type Product = {
  id: string;
  name: string;
  price: number | null;
  category: string;
  group: string;
  inStock: boolean;
  img: string | null;
};

const GROUPS: Record<string, string[]> = {
  'skin-care': ['body-moisturizers', 'facial-moisturizers', 'anti-acne', 'facial-care', 'micellar-water-makeup-removers'],
  'sun-care': ['body-sunscreen', 'facial-sunscreen', 'sun-care'],
  vitamins: ['vitamin-d', 'vitamins-supplements', 'magnesium', 'stress-relief-sleep', 'hydration-electrolytes', 'performance-energy'],
  baby: ['baby-care', 'stage-3', 'nido'],
  pharmacy: ['pain-relief', 'cold-flu', 'antacids-digestive'],
  'personal-care': ['shampoo', 'razors-cartridges'],
  food: ['low-sugar-snacks', 'tea-bags-infusions', 'still-water'],
};

const groupOf = (cat: string) =>
  Object.entries(GROUPS).find(([, cats]) => cats.includes(cat))?.[0] ?? 'other';

export const products: Product[] = (raw as Omit<Product, 'group'>[]).map((p) => ({
  ...p,
  group: groupOf(p.category),
}));

export const groups = [...new Set(products.map((p) => p.group))];
