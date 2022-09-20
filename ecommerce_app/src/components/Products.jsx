import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Product from './Product';
import { popularProducts } from "../data/data";

const Container = styled.div`
    padding: 20px;   
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ( { cat, filters, sort } ) => {
    console.log( [cat, filters, sort] );

    const [products, setProducts] = useState( [] );
    const [filteredProducts, setFilteredProducts] = useState( [] );

    // Get products from API when a Category is selected
    useEffect( () => {
        const getProducts = async () => {
            try {
                const res = await axios.get( "http://locathost:5000/api/products" )
                console.log( res );

            } catch ( err ) {

            }
        };
        getProducts();
    }, [cat] )

    return (
        <Container>
            { popularProducts.map( item => (
                <Product item={ item } key={ item.id } />
            ) ) }
        </Container>
    )
}

export default Products
