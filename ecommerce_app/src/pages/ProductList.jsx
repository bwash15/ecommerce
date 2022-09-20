import { useState } from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components'
import Annoucement from '../components/Annoucement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import { mobile, tablet } from '../responsive';


const Container = styled.div`

`;
const Title = styled.h1`
    margin: 20px;
`;
const FilterContainer = styled.div`
    display: flex; 
    justify-content: space-between;
`;
const Filter = styled.div`
    margin: 20px;    
    ${mobile( { margin: "0px 20px", display: "flex", flexDirection: "column" } )}
    ${tablet( { margin: "0px 20px", display: "flex", flexDirection: "column" } )}
`;

const FilterText = styled.div`
    font-size: 20px;
    font-weight: 600;
`;

const Select = styled.select`
    margin-right: 10px;   
    ${mobile( { margin: "10px 0px" } )}
    ${tablet( { margin: "10px 0px" } )}
`;

const Option = styled.option``;




const ProductList = () => {

    const location = useLocation();
    const cat = location.pathname.split( "/" )[2];
    const [filters, setFilters] = useState( {} );
    const [sort, setSort] = useState( "newest" );
    //const [catFilter, setCatFilters] = useState( {} );


    const handleFilters = ( e ) => {
        const value = e.target.value;
        setFilters( {
            ...filters,
            [e.target.value]: value,
        } );
    };
    console.log( filters )

    // const handleCategoryFilter = ( e ) => {
    //     const value = e.target.value;
    //     setCatFilters( {
    //         [e.target.value]: value,
    //     } );
    // }
    //console.log( catFilter )
    return (
        <Container>
            <Navbar />
            <Annoucement />
            <Title>The Many Uses of Hemp</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>
                        Filter Categories:
                    </FilterText>
                    <Select name="categories" onChange={ handleFilters }>
                        <Option disabled>
                            Hemp Use Categories
                        </Option>
                        <Option>Industrial</Option>
                        <Option>Recreational</Option>
                        <Option>Medicinal</Option>
                        <Option>Educational</Option>
                        <Option>Personal Use</Option>
                    </Select>
                    <Select name="productUse" onChange={ handleFilters }>
                        <Option disabled >
                            Product Use
                        </Option>
                        <Option>Wood Panel Boards</Option>
                        <Option>Rope</Option>
                        <Option>Livestock Feed</Option>
                        <Option>HempCrete</Option>
                        <Option>Denim</Option>
                        <Option>Clothing</Option>
                        <Option>Pet Bedding</Option>
                    </Select>
                    <Select name="productType" onChange={ handleFilters }>
                        <Option disabled >
                            Product Type
                        </Option>
                        <Option>Crude Oils</Option>
                        <Option>Distillites</Option>
                        <Option>HomeGrown</Option>
                        <Option>Gummies</Option>
                        <Option>Pet Treats</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>
                        Sort Products:
                    </FilterText>
                    <Select onChange={ ( e ) => setSort( e.target.value ) }>
                        <Option value={ "newest" }>Newest</Option>
                        <Option value={ "asc" }>Price (asc)</Option>
                        <Option value={ "desc" }>Price (desc)</Option>
                        <Option value={ "title" }>Title</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products cat={ cat } filters={ filters } sort={ sort } />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList

{/* <Select name="recreational" onChange={ handleFilters }>
<Option disabled >
    Recreational
</Option>
<Option>Flower</Option>
<Option>Distillites</Option>
<Option>HomeGrown</Option>
<Option>Gummies</Option>
<Option>Hookahs</Option>
</Select>
<Select name="personalUse" onChange={ handleFilters }>
<Option disabled >
    Personal Use
</Option>
<Option>Crude Oils</Option>
<Option>Distillites</Option>
<Option>HomeGrown</Option>
<Option>Gummies</Option>
<Option>Honey-Do List</Option>
</Select>
<Select name="educational" onChange={ handleFilters }>
<Option disabled >
    Educational
</Option>
<Option>EndoCannabinoid System</Option>
<Option>Soil Health</Option>
<Option>Soil Rejuvenation</Option>
<Option>Eco System Effects</Option>
</Select> */}