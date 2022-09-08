import styled from "styled-components";
import { useState } from "react";
import { sliderItems } from '../data/data';
import { mobile, tablet } from '../responsive';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: #55bbbb;
    position: relative;
    overflow: hidden;
    ${mobile({ display: "none" })}
    ${tablet({ display: "none" })}
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: whitesmoke;
    display: flex;   
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    cursor: pointer;
    opacity: 0.6;
    z-index: 2;
`;

// Takes the param passed in below and uses that to calculate how far to slide for the next 
// slide
const Wrapper = styled.div`
    height: 100%; 
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
    width: 100vw; 
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg};
`;
const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`;
const Image = styled.img`
    height: 65%;
    
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Title = styled.h1`
    font-size: 70px;

`;
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;

`;
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;


`;




const Slider = () => {
    const [slideIndex, setSlideIndex] = useState();
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <i class="fa-solid fa-chevron-left"></i>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map(item => (
                    <Slide bg={item.bg} key={item.id}>
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>Click Here for Details</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")} >
                <i class="fa-solid fa-chevron-right"></i>
            </Arrow>
        </Container >
    )
}

export default Slider