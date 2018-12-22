import React from "react";

import styled from "styled-components";

const Title = styled.h1`
  color: red;
`;

export default function Component() {
  return (
    <div>
      <Title>is'm a lazy styled component</Title>
    </div>
  );
}
