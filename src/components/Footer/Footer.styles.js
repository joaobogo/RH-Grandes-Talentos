import styled from "styled-components";

const FooterContainer = styled.footer`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
gap: 30%;

p{
    font-style: italic;
}

@media (max-width: 768px) {
flex-direction: column;
}
`;

export default FooterContainer;
