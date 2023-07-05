import styled from "styled-components";

const PaginationContainer = styled.div`
display: flex;
justify-content: center;
gap: 1%;
margin-top: 2%;


button {
    border-radius: 5px;
    background-color: none;
    border: solid gray 1px;
}

button:hover {
    cursor: pointer;
}

 button.active {
    border-color: black;
    background: pink;
    border-color: #ec1c7b;
  }
`;

export default PaginationContainer;
