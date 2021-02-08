import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
`;

const loader = () => (
  <Container>
    <span role="img" aria-label="Loading">
      ⏳
    </span>
  </Container>
);

export default loader;
