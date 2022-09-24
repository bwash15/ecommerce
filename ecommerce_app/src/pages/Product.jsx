import styled from "styled-components";
import Annoucement from "../components/Annoucement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile, tablet } from '../responsive';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { publicRequest } from "../requestMethods";

const Container = styled.div`

`;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile( { padding: "10px", flexDirection: "column" } )}
    ${tablet( { padding: "10px", flexDirection: "column" } )}
`;

const ImgContainer = styled.div`
    flex: 1;
    ${mobile( { padding: "10px" } )}
    ${tablet( { padding: "10px" } )}
`;
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile( { height: "40vh" } )}
    ${tablet( { height: "40vh" } )}
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`;
const Title = styled.h1`
    font-weight: 200;    
`;
const Desc = styled.p`
    margin: 20px 0px;
`;
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 40%;
    padding: 20px;
    margin: 30px 0px;
    ${mobile( { width: "100%" } )}
    ${tablet( { width: "100%" } )}
`;

const Filter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0px;
`;

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%; 
    background-color: ${( props ) => props.color};
    margin: 0px 5px;
    cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;


const TypeFilter = styled.select`
    margin-left: 10px;
    padding: 5px;
`;

const FilterUseType = styled.option`

`;

const ProductFilter = styled.select`
    margin-left: 10px;
    padding: 5px;
`;

const FilterProductType = styled.option`

`;

const AddContainer = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile( { width: "100%" } )}
    ${tablet( { width: "100%" } )}
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 10px;
`;

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: whitesmoke;
    }
`;


const Product = () => {

    const location = useLocation();
    const id = location.pathname.split( "/" )[2];
    const [product, setProduct] = useState( {} );


    useEffect( () => {
        const getProduct = async () => {
            try {
                const response = await publicRequest.get( "/products/find/" + id );
                setProduct( response.data );
            } catch ( err ) {
                console.log( err );
            }
        }
        getProduct()
    }, [id] )


    return (
        <Container>
            <Navbar />
            <Annoucement />
            <Wrapper>
                <ImgContainer>
                    <Image src={ product.img } />
                </ImgContainer>
                <InfoContainer>
                    <Title>{ product.title }</Title>
                    <Desc>
                        { product.desc }
                    </Desc>
                    <Price>{ product.price }</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Category</FilterTitle>
                            { product.categories.map( ( cat ) => ( <FilterUseType>{ cat }</FilterUseType> ) ) }
                        </Filter>
                        <Filter>
                            <FilterTitle>Product Use</FilterTitle>
                            { product.productUse.map( ( use ) => ( <FilterProductType>{ use }</FilterProductType> ) ) }
                        </Filter>
                        <Filter>
                            <FilterTitle>Product Type</FilterTitle>
                            { product.productType.map( ( type ) => ( <FilterProductType>{ type }</FilterProductType> ) ) }
                        </Filter>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            { product.color.length > 1
                                ? product.color.map( ( c ) => ( <FilterColor color={ c } key={ c } /> ) )
                                : <FilterColor color={ product.color } /> }
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            { product.size.map( ( s ) => ( <FilterSizeOption>{ s }</FilterSizeOption> ) ) }
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <i class="fa-solid fa-minus" ></i>
                            <Amount>1</Amount>
                            <i class="fa-solid fa-plus" ></i>
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />


        </Container>
    )
}
// https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.DG5I7oTzpA53W89S8kFO-AHaHW%26pid%3DApi&f=1  > HempCreate
// https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.cUXODNvnTA8LKc1HIkkSRgFNC7%26pid%3DApi&f=1  > fire test
// https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Ft-XHnINl50_tCJc4zMUQQHaEK%26pid%3DApi&f=1  > What is HempCrete
// https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.siliconvalley.com%2Fwp-content%2Fuploads%2F2016%2F08%2F20140402_074606_ssjm0403cob90.jpg%3Fw%3D620&f=1&nofb=1 > How to make a Cobb House
export default Product