import styled from 'styled-components'
import Annoucement from '../components/Annoucement';
import Footer from '../components/Footer';
import Navbar from '../components/navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';

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
    
`;

const FilterText = styled.div`
    font-size: 20px;
    font-weight: 600;
`;

const Select = styled.select`
    margin-right: 10px;    

`;
const Option = styled.option``;


const ProductList = () => {
    return (
        <Container>
            <Navbar />
            <Annoucement />
            <Title>The Many Uses of Hemp</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>
                        Filter Hemp Uses:
                    </FilterText>
                    <Select>
                        <Option disabled selected>
                            Industrial
                        </Option>
                        <Option>Hemp Wood Panel Boards</Option>
                        <Option>Hemp Rope</Option>
                        <Option>Hemp Livestock Feed</Option>
                        <Option>HempCrete</Option>
                        <Option>Hemp Denim</Option>
                        <Option>Hemp Clothing</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>
                            Medicinal
                        </Option>
                        <Option>Crude Oils</Option>
                        <Option>Distillites</Option>
                        <Option>HomeGrown</Option>
                        <Option>Gummies</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>
                        Sort Products:
                    </FilterText>
                    <Select>
                        <Option selected>Newest</Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (asc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList