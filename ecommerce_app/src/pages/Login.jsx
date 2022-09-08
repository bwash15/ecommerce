import styled from "styled-components";
import { mobile, tablet } from '../responsive';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.5)        
        ),
        url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.insidersguidetospas.com%2Fwp-content%2Fuploads%2F2016%2F06%2FHemp1.jpg&f=1&nofb=1"), center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    `;
const Wrapper = styled.div`
    padding: 20px;
    width: 25%; 
    background-color: #b7d9bc;
    ${mobile({ width: "75%" })}
    ${tablet({ width: "75%" })}
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const SubTitle = styled.h3`
    padding-top: 10px;
    font-size: 18px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin:  10px 0px;
    padding: 10px;
`;

const Link = styled.a`
    font-size: 12px;
    margin: 10px 0px;
    text-decoration: underline;
    cursor: pointer;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`;

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>
                    MBJT Holdings, Corp
                </Title>
                <SubTitle>
                    SIGN IN
                </SubTitle>
                <Form>
                    <Input placeholder="User Name" />
                    <Input placeholder="Password" />

                    <Button>LOGIN</Button>
                    <Link>FORGOT PASSWORD?</Link>
                    <Link>CREATE NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login