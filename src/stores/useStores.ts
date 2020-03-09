import { MobXProviderContext } from 'mobx-react';
import { useContext } from 'react';
import { ProductsStore } from './productsStore';

export default function useStores() {
    return useContext(MobXProviderContext);
}

interface Stores {
    [key: string]: any;
}

export const stores: Stores = {
    productsStore: new ProductsStore(),
};
