import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create(
  persist(
    (set) => ({
      cart: [],
      addToCart: (product) => set((state) => {
        const exists = state.cart.find((item) => item.id === product.id);
        if (exists) return state; // Already in cart
        return { cart: [...state.cart, product] };
      }),
      removeFromCart: (productId) => set((state) => ({
        cart: state.cart.filter((item) => item.id !== productId)
      })),
      clearCart: () => set({ cart: [] }),
      getCartTotal: () => {
        return useCartStore.getState().cart.reduce((total, item) => total + item.price, 0);
      }
    }),
    {
      name: 'dev-service-cart', // local storage key
    }
  )
);

export default useCartStore;
