import { CartCounter } from "@/shopping-cart";

export const metadata = {
  title: 'Shopping cart',
  description: 'A simple counter',
};

export default function CounterPage() {


  return (
    <div className="flex flex-col items-center justify-center w-full h-full">

      <span>Products of the cart</span>

      <CartCounter />


    </div>
  );
} 