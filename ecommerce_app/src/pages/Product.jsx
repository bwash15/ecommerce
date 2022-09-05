import styled from "styled-components";
import Annoucement from "../components/Annoucement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import Newsletter from "../components/Newsletter";

const Container = styled.div`

`;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`;

const ImgContainer = styled.div`
    flex: 1;
`;
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
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
    justify-content: space-between;
    width: 40%;
    margin: 30px 0px;

`;

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;

const FilterColor = styled.div`
    width: 20px;
    height: 20pc;
    border-radius: 50%; 
    background-color: ${props => props.color};
    margin: 0px 5px;
    cursor: pointer;
`;

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
    return (
        <Container>
            <Navbar />
            <Annoucement />
            <Wrapper>
                <ImgContainer>
                    <Image src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.RD2sm2VXB3s8bi154lOgsQHaHN%26pid%3DApi&f=1" />
                </ImgContainer>
                <InfoContainer>
                    <Title>HempCreate Small Block</Title>
                    <Desc>
                        Product Description will go here .....
                    </Desc>
                    <Price>$20</Price>
                    <FilterContainer>
                        <FilterTitle>Use Type</FilterTitle>
                        <TypeFilter>
                            <FilterUseType disabled selected>Industrial</FilterUseType>
                            <FilterUseType>Medicinal</FilterUseType>
                            <FilterUseType>Personal Home</FilterUseType>
                        </TypeFilter>
                    </FilterContainer>
                    <FilterContainer>
                        <FilterTitle>Quantity</FilterTitle>
                        <ProductFilter>
                            <FilterProductType disabled selected>1</FilterProductType>
                            <FilterProductType>2</FilterProductType>
                            <FilterProductType>3</FilterProductType>
                        </ProductFilter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <i class="fa-solid fa-minus"></i>
                            <Amount>1</Amount>
                            <i class="fa-solid fa-plus"></i>
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