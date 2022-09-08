import styled from "styled-components";
import { mobile, tablet } from "../responsive";

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
    ${tablet({ flexDirection: "column" })}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;

`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
    ${tablet({ display: "none" })}
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ textAlign: "center" })}
    ${tablet({ textAlign: "center" })}
`;

const Title = styled.h3`
    margin-bottom: 30px;

`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;

`;

const ListItem = styled.li`
    width: 50%;

`;

const Logo = styled.div`
    margin: 20px 0px;

`;
const Desc = styled.div`
    margin: 20px 0px;

`;
const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;
const ContactItem = styled.div`
    margin-bottom: 20px;
   
    display: flex;
    align-items: center;
`;
const ContactIcon = styled.div`
     margin-right: 20px;
`;
const Payment = styled.img`

`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>BDUB</Logo>
                <Desc>
                    There are many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form, by injected
                    humour, or randomised words which does not look even slightly believable.
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <i class="fa-brands fa-facebook"></i>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <i class="fa-brands fa-instagram"></i>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <i class="fa-brands fa-twitter"></i>
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <i class="fa-brands fa-pinterest-p"></i>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Portal</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Inventory</ListItem>
                    <ListItem>MyAccount</ListItem>
                    <ListItem>Order Tracking</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem >
                    <ContactIcon>
                        <i class="fa-solid fa-location-dot"></i>
                    </ContactIcon>
                    622 Dixie Dr. GVegas, SC 29609
                </ContactItem>
                <ContactItem>
                    <ContactIcon>
                        <i class="fa-solid fa-phone"></i>
                    </ContactIcon>
                    8645891265
                </ContactItem>
                <ContactItem>
                    <ContactIcon>
                        <i class="fa-solid fa-envelope"></i>
                    </ContactIcon>
                    contact@contact.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    )
}

export default Footer