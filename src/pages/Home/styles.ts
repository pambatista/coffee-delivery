import styled from "styled-components";

export const HomeContainer = styled.div`
  margin-bottom: 4rem;
  & > h3 {
    font-family: "Baloo 2";
    font-size: 2rem;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme["gray-900"]};
    margin: 3rem 0 2rem 0;
  }
`;

export const HomeContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-bottom: 3.375rem;
`;
