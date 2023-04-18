import styled from "styled-components";

export const Container = styled.div`
  width: 100dvw;
`

export const Heading = styled.h1`
  color: red;
`;

export const PathContainer = styled.div`
  position: absolute;
  left: 0;
  top: 7rem;
  height: 70vh;
  width: 70vw;
`;

export const Body = styled.body`
  background: transparent!important;
  background-color: #eee;
`;

const components = {
  Container,
  Heading,
  PathContainer,
  Body,
};

export default components;