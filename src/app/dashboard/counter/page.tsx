import CartCounter from '@/app/shopping-cart/components/CartCounter';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shopping cart',
  description: 'Simple contador',
};

// Lugar para creatividad
// https://www.creative-tim.com/twcomponents/component/dashboard-navigation
// prc -> snippet
export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
      <CartCounter value={ 20 } />
    </div>
  );
}