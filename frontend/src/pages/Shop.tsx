import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { LayoutGrid, ShoppingBag, Square } from 'lucide-react';
import { useT } from '@/i18n/translations';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FadeInSection, CyberCard } from '@/components/GlitchEffects';
import { config } from '@/lib/config';
import { PRODUCTS, type Product } from '@/data/products';

interface OrderItem {
  id?: string | number;
  nameKey?: string;
  price?: number;
  quantity?: number;
}

interface Order {
  id: number;
  product?: OrderItem;
  items?: OrderItem[];
  createdAt?: string;
}

export default function ShopPage() {
  const t = useT();
  const [orders, setOrders] = useState<Order[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [mobileColumns, setMobileColumns] = useState<1 | 2>(2);

  const fetchOrders = async () => {
    if (!config.API_BASE_URL) {
      setOrders([]);
      return;
    }

    try {
      const res = await fetch(`${config.API_BASE_URL}/orders`);
      if (!res.ok) {
        throw new Error(`Failed to load orders: ${res.status}`);
      }

      const data = await res.json();
      setOrders(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
      setOrders([]);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const filters: { key: string; labelKey: string }[] = [
    { key: 'all', labelKey: 'shop_filter_all' },
    { key: 'tshirt', labelKey: 'shop_filter_tshirts' },
    { key: 'hoodie', labelKey: 'shop_filter_hoodies' },
    { key: 'oversized', labelKey: 'shop_filter_oversized' },
    { key: 'accessories', labelKey: 'shop_filter_accessories' },
  ];

  const filtered = activeFilter === 'all'
    ? PRODUCTS
    : activeFilter === 'accessories'
      ? PRODUCTS.filter((p) => p.category === 'cap' || p.category === 'case')
      : PRODUCTS.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-cyber-black">
      <Navbar />

      <section className="pt-28 pb-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-mono text-cyber-cyan text-xs tracking-[0.2em] mb-2">
            {'// '}{t('shop_subtitle')}
          </p>
          <h1 className="font-orbitron font-bold text-4xl md:text-5xl text-white tracking-wider">
            {t('shop_title')}
          </h1>
        </div>
      </section>

      <section className="px-4 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`font-orbitron text-[10px] tracking-widest uppercase px-5 py-2 rounded border transition-[border-color,color,background-color] duration-300 ease-out ${
                  activeFilter === filter.key
                    ? 'bg-cyber-purple border-cyber-purple text-white neon-glow-purple'
                    : 'bg-transparent border-cyber-border text-gray-400 hover:border-cyber-purple hover:text-cyber-purple hover:bg-cyber-purple/5'
                }`}
              >
                {t(filter.labelKey as Parameters<typeof t>[0])}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-5 flex items-center justify-between sm:hidden">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-gray-500">
              View Density
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setMobileColumns(1)}
                className={`flex h-10 w-10 items-center justify-center rounded border transition-colors ${
                  mobileColumns === 1
                    ? 'border-cyber-purple bg-cyber-purple/10 text-cyber-purple'
                    : 'border-cyber-border text-gray-400'
                }`}
                aria-label="Show one product per row"
              >
                <Square className="h-4 w-4" />
              </button>
              <button
                onClick={() => setMobileColumns(2)}
                className={`flex h-10 w-10 items-center justify-center rounded border transition-colors ${
                  mobileColumns === 2
                    ? 'border-cyber-purple bg-cyber-purple/10 text-cyber-purple'
                    : 'border-cyber-border text-gray-400'
                }`}
                aria-label="Show two products per row"
              >
                <LayoutGrid className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className={`grid gap-3 sm:gap-6 ${mobileColumns === 1 ? 'grid-cols-1' : 'grid-cols-2'} sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`}>
            {filtered.map((product, index) => (
              <FadeInSection key={product.id} delay={index * 80}>
                <ProductCard product={product} t={t} compact={mobileColumns === 2} />
              </FadeInSection>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="font-mono text-gray-500 text-sm">{t('shop_no_products')}</p>
            </div>
          )}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="space-y-2">
          {orders.map((order) => {
            const orderItems = order.items || [];
            const total = orderItems.length > 0
              ? orderItems.reduce(
                  (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
                  0
                )
              : order.product?.price || 0;

            return (
              <div
                key={order.id}
                className="bg-cyber-card border border-cyber-border p-3 rounded"
              >
                <p className="text-xs text-gray-400">
                  ID: {order.id}
                </p>

                <p className="text-white text-sm">
                  {t('shop_product_label')}{' '}
                  {orderItems.length > 0
                    ? `${orderItems.length} ${t(orderItems.length > 1 ? 'shop_order_assets_plural' : 'shop_order_assets_singular')}`
                    : t(order.product?.nameKey as any)}
                </p>

                <p className="text-cyber-purple text-sm">
                  €{total.toFixed(2)}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}

function ProductCard({
  product,
  t,
  compact,
}: {
  product: Product;
  t: ReturnType<typeof useT>;
  compact: boolean;
}) {
  const navigate = useNavigate();

  return (
    <CyberCard onClick={() => navigate(`/product/${product.id}`)} className="group overflow-hidden flex flex-col h-full cursor-pointer hover:-translate-y-[4px] hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(139,92,246,0.12)] bg-cyber-card border border-cyber-border hover:border-cyber-purple/50">
      <div className={`${compact ? 'aspect-[3/4]' : 'aspect-[4/5]'} sm:aspect-[4/5] bg-gradient-to-br from-cyber-surface to-cyber-card flex items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />

        {product.images && product.images.length > 0 ? (
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.08]"
          />
        ) : (
          <ShoppingBag className={`${compact ? 'w-10 h-10' : 'w-14 h-14'} sm:w-14 sm:h-14 text-cyber-purple/20 group-hover:text-cyber-purple/50 transition-transform duration-500 ease-out group-hover:scale-[1.05]`} />
        )}

        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 font-mono text-[9px] sm:text-[10px] text-cyber-purple/30 z-10 pointer-events-none">
          #{String(product.id).padStart(3, '0')}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-purple/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none" />

        <div className="absolute inset-0 bg-black/60 dark:bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10 hidden sm:flex">
          <span className="font-orbitron font-bold text-xs tracking-[0.2em] uppercase !text-white border border-cyber-purple/50 px-6 py-2 rounded transition-[background,border,box-shadow] duration-300 group-hover:bg-cyber-purple/10 group-hover:border-cyber-purple group-hover:shadow-[0_0_10px_rgba(139,92,246,0.5)]">
            {t('pdp_cta_deploy')}
          </span>
        </div>
      </div>

      <div className={`${compact ? 'p-3' : 'p-4'} sm:p-4 flex flex-col justify-between flex-grow`}>
        <div>
          <h3 className={`${compact ? 'text-[11px] tracking-[0.12em]' : 'text-sm tracking-wider'} sm:text-sm font-orbitron font-semibold text-gray-900 dark:text-white leading-tight mb-1.5 sm:mb-2 uppercase`}>
            {product.name}
          </h3>
          <p className={`${compact ? 'text-[9px]' : 'text-[10px]'} sm:text-[10px] font-mono text-gray-600 dark:text-gray-400 opacity-80 mb-2.5 sm:mb-3 line-clamp-2`}>
            {product.taglineKey ? t(product.taglineKey as Parameters<typeof t>[0]) : t('shop_product_fallback')}
          </p>

          <div className="flex gap-1 sm:gap-1.5 mb-2.5 sm:mb-3">
            {product.colors.map((color, i) => (
              <div
                key={i}
                className={`${compact ? 'w-3 h-3' : 'w-3.5 h-3.5'} sm:w-3.5 sm:h-3.5 rounded-full border border-cyber-border`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        <div className="pt-2">
          <span className={`${compact ? 'text-base' : 'text-lg'} sm:text-lg font-mono text-gray-900 dark:text-white font-semibold drop-shadow-[0_0_6px_rgba(139,92,246,0.4)]`}>
            €{product.price.toFixed(2)}
          </span>
        </div>
      </div>
    </CyberCard>
  );
}
