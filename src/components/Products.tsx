
import {useState, useEffect} from 'react';
import {ProductList} from '../services/productServices';

type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    thumbnail: string;
};



function Products() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        getProductList();
    }, []);

    async function getProductList() {
        const response = await ProductList(2);
        setProducts(response.products);
    }

    return (
        <div>
            <h1>Products</h1>
            {products.map(product => (
                <div key={product.id}>
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <p>₹ {product.price}</p>
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        width="120"
                    />
                    <hr />
                </div>
            ))}
        </div>
    )
}
export default Products;