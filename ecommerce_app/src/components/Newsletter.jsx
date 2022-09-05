import styled from 'styled-components';

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    flex-direction: column;
`;
const Title = styled.h1`
    font-size: 60px;
    font-weight: 300;
    margin-bottom: 20px;
`;
const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`;
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    border-radius: 10%;
`;
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`;
const Button = styled.button`
    flex: 1;
    cursor: pointer;
`;



const Newsletter = () => {
    return (
        <Container>
            <Title>Sign Up For our NewsLetter!!</Title>
            <Desc>Get Timely updates on your favorite products</Desc>
            <InputContainer>
                <Input placeholder='Your Email' />
                <Button>
                    <i class="fa-solid fa-paper-plane"></i>
                </Button>
            </InputContainer>


        </Container>
    )
}

export default Newsletter