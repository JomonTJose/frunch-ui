import axios from 'axios';
import { IProduct } from '../components/productsList/products.model';
import { API_URL } from '../constants';

export class ProductsApi {
    public async getProducts(resid: number): Promise<IProduct[] | any> {
        const response: any = await axios.get(`${API_URL}products/ByRestaurantId?resId=${resid}`);
        if (response.status !== 200) {
            throw new Error(`Unable to fetch data. Error is ${response.status}`)
        }
        return response.data as IProduct;
    }
}