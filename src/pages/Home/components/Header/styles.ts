import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 3.5rem;
  margin-top: 3.5rem;
`;

export const HeaderTitle = styled.h1`
  font-family: "Baloo 2", sans-serif;
  font-size: 3rem;
  font-style: normal;
  font-weight: 800;
  line-height: 130%;
  margin: 0;
  margin-bottom: 1rem;
  color: ${(props) => props.theme["gray-900"]};
`;

export const HeaderDescription = styled.p`
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  color: ${(props) => props.theme["gray-800"]};
`;

export const HeaderItems = styled.ul`
  display: flex;
  width: 35.3125rem;
  align-items: flex-start;
  align-content: flex-start;
  gap: 1.25rem 2.5rem;
  flex-wrap: wrap;

  margin-top: 4.125rem;
`;

export interface HeaderItemProps {
  color: "yellow-dark" | "yellow-light" | "gray-dark" | "purple-dark";
}

const COLORS_ITEM = {
  "yellow-dark": "yellow-700",
  "yellow-light": "yellow-500",
  "gray-dark": "gray-700",
  "purple-dark": "purple-300",
};

export const HeaderItem = styled.li<HeaderItemProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 1000px;
    background: ${(props) => props.theme[COLORS_ITEM[props.color]]};

    svg {
      color: ${(props) => props.theme["white"]};
    }
  }

  & > span {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
`;
