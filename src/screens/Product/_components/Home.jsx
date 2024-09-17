import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../../../redux/products/productActions";

const Home = () => {
    const products = useSelector((state) => state.product);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(
            setProducts([
                { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
                { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
                { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
                { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
                { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
                { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
            ])
        )
    }, []);

    return (
        <>
            <h4>Home</h4>
            <ul>
                {
                    products.products.map(product => <li key={product.name}>{product.name}</li>)
                }
            </ul>
        </>
    );
}

export default Home;