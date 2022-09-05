import styled from "styled-components";


const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
const Info = styled.div`
    position:absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const Title = styled.h1`
    color: #0f0f0f;
    margin-bottom: 20px;
    font-weight: 700;
`;
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: #53a053;
    color: whitesmoke;
    cursor: pointer;
`;

const CategoryItem = ({ item }) => {
    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Button>Click for Details</Button>
            </Info>
        </Container>
    )
}

export default CategoryItem