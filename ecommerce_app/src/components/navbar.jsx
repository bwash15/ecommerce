import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 60px; 
    background-color: #d5cece;
`;

const Wrapper = styled.div`
    padding: 0px 20px;
    display: flex;    
    justify-content: space-between;
    align-items: center;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`;

const SearchContainer = styled.div`       
    display: flex;
    align-items: center;
    padding-left: 5px;
    margin-left: 25px;
`;

const Input = styled.input`
    border: none;
    margin-right: 5px;
`;

const Logo = styled.h1`
    font-weight: bold;
    font-size: 48px;
`;

const Center = styled.div`    
    flex: 1;
    text-align: center;    
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;  
    margin-left: 25px;
`;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <i class="fa-solid fa-magnifying-glass" style={{ color: "gray", fontSize: 16 }}></i>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>Rooted in Carolina</Logo>
                </Center>
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Sign In</MenuItem>
                    <MenuItem>
                        <i class="fa-solid fa-cart-shopping">4</i>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar