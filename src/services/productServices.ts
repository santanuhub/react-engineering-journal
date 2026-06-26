import {PRODUCTS_URL} from './api/endPoints';
import {getAPI} from './api/baseServices';


export async function ProductList(limit:number=10):Promise<{ products: any[] }> {
    const url = `${PRODUCTS_URL}?limit=${limit}`;
    let result = await getAPI(url);
    console.log(result);
    return await result.json();
}