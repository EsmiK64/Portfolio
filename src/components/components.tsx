import styled from "styled-components";

export const Heading = styled.h1`
  color: red;
`;

export const PathContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 70vh;
  width: 70vw;
`;

export const Body = styled.body`
  background: transparent;
  background-color: #eee;
`;

const components = {
  Heading,
  PathContainer,
  Body,
};

export default components;