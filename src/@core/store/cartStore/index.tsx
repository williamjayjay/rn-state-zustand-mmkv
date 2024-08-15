import { create } from "zustand";
import { ICartState, IProduct } from "./interfaces";
import { createJSONStorage, persist } from "zustand/middleware";
import { zustandStorage } from "../mmkvStore";

const useProductsStore = create<ICartState>()(
    persist(
        (set, get) => ({
            products: [],
            items: 0,

            addProduct: (product: IProduct & { quantity?: number }) => set((state) => {
                state.items++

                const hasProduct = state.products.find((p) => p.id === product.id);

                if (!hasProduct) {
                    return {
                        products: [...state.products, { ...product, quantity: 1 }]
                    }
                }

                return {
                    products: state.products.map((p) => {
                        if (p.id === product.id) {
                            return { ...p, quantity: p.quantity + 1 }
                        }
                        return p
                    })
                }
            }),

            reduceProduct: (product: IProduct & { quantity?: number }) => set((state) => {
                return {
                    products: state.products.map((p) => {
                        if (p.id === product.id) {
                            state.items--;

                            return { ...p, quantity: p.quantity - 1 };
                        }
                        return p;
                    }).filter((p) => p.quantity > 0)
                }

            }),

            clearCart: () => set(() => {
                return {
                    items: 0,
                    products: []
                }
            })
        }),
        {
            name: 'cart-storage',
            storage: createJSONStorage(() => zustandStorage)
        }
    )
);

export { useProductsStore }