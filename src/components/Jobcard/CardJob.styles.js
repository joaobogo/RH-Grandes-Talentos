import styled from "styled-components";

const CardContainer = styled.div`
display: flex;
border-bottom: solid  1px;
width: 80%;
margin-left: 10%;
margin-right: 10%;

.position{
    font-weight: bolder;
}


.left{
    width: 70%;
}

.right{
    width: 30%;
    text-align: right;
    color: #535454;
}

a{
    text-decoration: none;
    color: black;
}

@media (max-width: 768px) {

    width: 90%;
    justify-content: space-around;
    margin-left: 5%;
margin-right: 5%;

    p{
        font-size: 14px;
    }

    .left{
        width: 50%;
    }
}
`;

export default CardContainer;
