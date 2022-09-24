import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: gray;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`;

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #c5e9b9;
    position: relative;

    &:hover ${Info} {
        opacity: 1;
    }
`;

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius:50%;
    background-color: white;
    position: absolute;
`;
const Image = styled.img`
    height: 75%;
    z-index: 2;
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;

    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`;

const Product = ( { item } ) => {
    return (
        <Container>
            <Circle />
            <Image src={ item.img } />
            <Info>
                <Icon>
                    <i class="fa-solid fa-cart-shopping"></i>
                </Icon>
                <Icon>
                    <Link to={ `/product/${item._id}` }>
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </Link>
                </Icon>
                <Icon>
                    <i class="fa-solid fa-heart"></i>
                </Icon>
            </Info>

        </Container>
    )
}

export default Product




//---------------------------------------------------------------------

// import styled from "styled-components";

// const Container = styled.div`
//     flex: 1;
//     margin: 5px;
//     min-width:280px;
//     min-height: 350px;
// `;

// const Circle = styled.div``;
// const Image = styled.div``;
// const Info = styled.div``;
// const Icon = styled.div``;

// const Product = ({ item }) => {
//     return (
//         <Container>
//             <Circle />
//             <Image src={item.img} />
//             <Info>
//                 <Icon>
//                     <i class="fa-solid fa-cart-shopping-fast"></i>
//                 </Icon>
//                 <Icon>
//                     <i class="fa-solid fa-magnifying-glass"></i>
//                 </Icon>
//                 <Icon>
//                     <i class="fa-solid fa-heart"></i>
//                 </Icon>
//             </Info>
//         </Container>
//     )
// }

// export default Product