import styled from "styled-components";

const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    text-align: center;
    color: #ec1c7b;
    margin-bottom: 5%;
  }

  h2 {
    text-align: left;
    color: #ec1c7b;
  }

  img {
    width: 400px;
    border-radius: 10px;
    border: solid black;
  }

  .post {
    width: 80vw;
    overflow: hidden;
    margin-bottom: 5%;
  }

  .posthead {
    display: flex;
    align-items: center;
    gap: 5px;
    color: #ec1c7b;
    justify-content: space-between;
  }

  strong{
    color: black;
  }
  .postbody {
    display: flex;
    gap: 20px;
    align-items: center;
    text-align: justify;
  }

  .date{
    display: flex;
    gap: 10px;
  }
 
`;

export default BlogContainer;
