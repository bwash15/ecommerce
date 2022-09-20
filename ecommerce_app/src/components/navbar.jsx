import React from 'react';
import styled from 'styled-components';
import { mobile, tablet } from '../responsive';

const Container = styled.div`
    height: fit-content; 
    background-color: #d5cece;
    ${mobile( { height: "fit-content" } )}
    ${tablet( { height: "fit-content" } )}
`;

const Wrapper = styled.div`
    padding: 0px 20px;
    display: flex;    
    justify-content: space-between;
    align-items: center;
    ${mobile( { padding: "10px 0px" } )}
    ${tablet( { padding: "10px 0px" } )}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile( { display: "none" } )}
    ${tablet( { display: "none" } )}
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
    ${mobile( { width: "50px" } )}
    ${tablet( { width: "50px" } )}
`;

const Logo = styled.h1`
    font-weight: bold;
    font-size: 48px; 
    ${mobile( { fontSize: "24px" } )}
    ${tablet( { fontSize: "24px" } )}
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
    ${mobile( { flex: 2, justifyContent: "center" } )}
    ${tablet( { flex: 2, justifyContent: "center" } )}
`;

const MenuItem = styled.a`
    color: black;
    font-size: 14px;
    cursor: pointer;  
    margin-left: 25px;
    ${mobile( { fontSize: "12px", marginLeft: "10px" } )}
    ${tablet( { fontSize: "12px", marginLeft: "10px" } )}
`;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <i className="fa-solid fa-magnifying-glass" style={ { color: "gray", fontSize: 16 } }></i>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>Rooted in Carolina</Logo>
                </Center>
                <Right>
                    <MenuItem href='/register'>Register</MenuItem>
                    <MenuItem href='/login'>Sign In</MenuItem>
                    <MenuItem>
                        <i className="fa-solid fa-cart-shopping">4</i>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar