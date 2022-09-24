import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Product from './Product';


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
                console.log( "Getting products from API" );
                const res = await axios.get( cat ? `http://localhost:5000/api/products?categories=${cat}` : `http://localhost:5000/api/products` );
                console.log( "Data Returned form API..." );
                console.log( res );
                setProducts( res.data );

            } catch ( err ) {
                console.log( err );
            }
        };
        getProducts()
    }, [cat] );

    // Looks inside each category and filters if the Item key equals the value
    useEffect( () => {
        cat && setFilteredProducts(
            products.filter( item => Object.entries( filters ).every( ( [key, value] ) =>
                item[key].includes( value )
            ) )
        );
    }, [products, cat, filters] )

    useEffect( () => {
        if ( ( sort === "newest" ) ) {
            setFilteredProducts( ( prev ) => [...prev].sort( ( a, b ) => a.createdAt - b.createdAt )
            );
        } else if ( ( sort === "asc" ) ) {
            setFilteredProducts( ( prev ) => [...prev].sort( ( a, b ) => a.price - b.price )
            );
        } else {
            setFilteredProducts( ( prev ) => [...prev].sort( ( a, b ) => b.price - a.price )
            );
        }
    }, [sort] )

    return (
        <Container>
            { cat ? filteredProducts.map( ( item ) => <Product item={ item } key={ item.id } /> )
                : products.slice( 0, 8 ).map( ( item ) => <Product item={ item } key={ item.id } /> )
            }
        </Container>
    )
}

export default Products
