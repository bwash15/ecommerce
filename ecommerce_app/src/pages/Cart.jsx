import styled from 'styled-components';
import Navbar from '../components/navbar';
import Announcement from '../components/Annoucement';
import Footer from '../components/Footer';


const Container = styled.div`

`;
const Wrapper = styled.div`
    padding: 20px;

`;
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;
const Top = styled.div`
    display: flex; 
    align-items: center;
    justify-content: space-between;
`;
const Bottom = styled.div`

`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;

`;
const Button = styled.button``;


const Cart = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>In Your Shopping Bag...</Title>
                <Top>

                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopButton>CHECKOUT NOW</TopButton>
                </Top>
                <Bottom></Bottom>
            </Wrapper>
            Cart
            <Footer />
        </Container>
    )
}

export default Cart