import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  & > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`;

export const ChipLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme["purple-100"]};

  color: ${(props) => props.theme["purple-500"]};

  font-family: "roboto", sans-serif;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;

  svg {
    color: ${(props) => props.theme["purple-300"]};
  }
`;

interface ChipCarProps {
  items?: number;
}

export const ChipCar = styled.div<ChipCarProps>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 6px;
  cursor: pointer;

  background: ${(props) => props.theme["yellow-300"]};
  color: ${(props) => props.theme["yellow-700"]};

  ${({ items }) =>
    items &&
    items > 0 &&
    css`
      &::before {
        content: "${items}";
        position: absolute;
        top: -0.75rem;
        right: -0.25rem;
        width: 1.25rem;
        height: 1.25rem;

        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.1rem;
        border-radius: 100%;
        background: ${(props) => props.theme["yellow-700"]};

        color: ${(props) => props.theme["white"]};
        text-align: center;

        font-family: Roboto;
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 700;
        line-height: 130%;
        letter-spacing: -0.045rem;
      }
    `}
`;
