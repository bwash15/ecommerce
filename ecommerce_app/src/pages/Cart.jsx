import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Annoucement';
import Footer from '../components/Footer';
import { mobile, tablet } from '../responsive';


const Container = styled.div`

`;
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px" })}
    ${tablet({ padding: "10px" })}
`;
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;
const Top = styled.div`
    display: flex; 
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;


const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === "filled" && "none"};
    background-color: ${props => props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
    ${mobile({ display: "none" })}
    ${tablet({ display: "none" })}
`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
    ${tablet({ flexDirection: "column" })}
`;

const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
    ${tablet({ flexDirection: "column" })}
`;
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
    
`;
const Image = styled.img`
    width: 200px;
`;
const Details = styled.div`
    display: flex; 
    flex-direction: column;
    padding: 20px;
    justify-content: space-around;
`;
const ProductName = styled.span`
    padding: 5px 0px;
`;
const ProductId = styled.span`
    padding: 5px 0px;
`;
const ProductCategory = styled.span`
    padding: 5px 0px;
`;

const ProductColor = styled.div`    
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
`;
const ProductType = styled.span`
    padding: 5px 0px;
`;

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: "5px 15px" })}
    ${tablet({ margin: "5px 15px" })}
`;
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBottom: "column" })}
    ${tablet({ marginBottom: "column" })}
`;

const Hr = styled.hr`
    background-color: #eee;  
    border: none;
    height: 1px;
    margin: 10px 0px;
`;


const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    padding: 10px;
    border-radius: 10px;
    height: 50vh;
`;

const SummaryTitle = styled.h1`
    font-weight: 200px;
`;

const SummaryItem = styled.div`
    margin: 30px 0px; 
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span`

`;

const SummaryItemPrice = styled.span`

`;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;

    &:hover {
        background-color: darkgray;     
    }
`;

const Cart = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>In Your Shopping Bag...</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag (2)</TopText>
                        <TopText>Wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton type='filled'>CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.WBn-SWyj45dBGZueFOnDaQHaCv%26pid%3DApi&f=1" />
                                <Details>
                                    <ProductName><b>Product Name: </b> Modern Uses for Hemp Poster</ProductName>
                                    <ProductId><b>Product ID: </b> 9876543210123456789</ProductId>
                                    <ProductCategory><b>Category: </b> Industrial </ProductCategory>
                                    <ProductType><b>Product Type: </b> Home/Personal</ProductType>
                                    <ProductColor color='green' />
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <i class="fa-solid fa-plus"></i>
                                    <ProductAmount>2</ProductAmount>
                                    <i class="fa-solid fa-minus"></i>
                                </ProductAmountContainer>
                                <ProductPrice>$ 30</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr />
                        <Product>
                            <ProductDetail>
                                <Image src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.WBn-SWyj45dBGZueFOnDaQHaCv%26pid%3DApi&f=1" />
                                <Details>
                                    <ProductName><b>Product Name: </b> Modern Uses for Hemp Poster</ProductName>
                                    <ProductId><b>Product ID: </b> 9876543210123456789</ProductId>
                                    <ProductCategory><b>Category: </b> Industrial </ProductCategory>
                                    <ProductType><b>Product Type: </b> Home/Personal</ProductType>
                                    <ProductColor color='green' />
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <i class="fa-solid fa-plus"></i>
                                    <ProductAmount>2</ProductAmount>
                                    <i class="fa-solid fa-minus"></i>
                                </ProductAmountContainer>
                                <ProductPrice>$ 30</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>Order Summary</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText >Total</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        <Button>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart