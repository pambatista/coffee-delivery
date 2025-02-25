import { createContext, useState } from "react";

export interface Product {
  id: number;
  name: string;
  price: number;
  tags: string[];
  description: string;
  image: string;
  quantity: number;
}
interface ProductQuantity {
  quantity: number;
  product: Product;
}

interface ShoppingCart {
  products: Product[];
  addProduct: (product: Product) => void;
  changeQuantityProduct: (product: ProductQuantity) => void;
  removeProduct: (product: Product) => void;
}

export const ShoppingCartContext = createContext({} as ShoppingCart);

interface ShoppingCartProviderProps {
  children: React.ReactNode;
}
export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);

  function addProduct(product: Product) {
    const hasProduct = products.find(
      (product_state) => product_state.id === product.id
    );
    if (!hasProduct) {
      setProducts((state) => [...state, product]);
    }
  }

  function removeProduct(product: Product) {
    const hasProduct = products.find(
      (product_state) => product_state.id === product.id
    );
    if (hasProduct) {
      setProducts((state) => {
        return state.filter((product_state) => product_state.id !== product.id);
      });
    }
  }

  function changeQuantityProduct({ quantity, product }: ProductQuantity) {
    const hasProduct = products.find(
      (product_state) => product_state.id === product.id
    );

    if (quantity === 0) {
      removeProduct(product);
      return;
    }

    if (hasProduct) {
      setProducts((state) => {
        return state.map((product_car) => {
          if (product_car.id === product.id) {
            product_car.quantity = quantity;
          }
          return product_car;
        });
      });
    } else {
      setProducts((state) => [
        ...state,
        {
          ...product,
          quantity,
        },
      ]);
    }
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        products,
        addProduct,
        changeQuantityProduct,
        removeProduct,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
