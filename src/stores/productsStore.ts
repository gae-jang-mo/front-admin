import { action, computed, configure, observable, runInAction } from 'mobx';
import { openNotification } from '../lib/openNotification';
import { findInternalProducts } from '../api/product';
import { ProductDto } from '../model/productDto';

export class ProductsStore {
    @observable productList: ProductDto[] = [];

    @action
    fetchProductList = async () => {
        try {
            const res = await findInternalProducts();
            runInAction(() => {
                this.productList = res.data;
            });
        } catch (err) {
            openNotification('장비 목록을 불러오는데 실패했습니다.');
        }
    };
}
