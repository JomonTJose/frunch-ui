import { IRestaurant } from '../models/restaurant.model';
import axios from 'axios';
import { API_URL } from '../constants';
import { createAsyncThunk } from "@reduxjs/toolkit";

export class RestaurantApi {

    public async getRestaurants(): Promise<IRestaurant[] | any> {
        const response: any = await axios.get(`${API_URL}restaurants`);
        if (response.status !== 200) {
            throw new Error(`Unable to fetch data. Error is ${response.status}`)
        }
        return response.data as IRestaurant;
    }

    public async getPrevRatedRestaurants(userid: number): Promise<IRestaurant[] | any> {
        const response: any = await axios.get(`${API_URL}users/ratedrestaurants?userid=${userid}`);
        if (response.status !== 200) {
            throw new Error(`Unable to fetch data. Error is ${response.status}`)
        }
        return response.data as IRestaurant[];
    }
}


