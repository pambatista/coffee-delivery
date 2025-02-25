import styled from "styled-components";

export const CoffeItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  margin-bottom: 1.5rem;

  & > img {
    width: 4rem;
    height: 4rem;
  }

  & + div {
    padding-top: 1.5rem;
    border-top: 1px solid ${(props) => props.theme["gray-400"]};
  }
`;

export const CoffeItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & > div {
    display: flex;
    gap: 0.5rem;
  }

  & > strong {
    font-family: "Roboto";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme["gray-700"]};
  }
`;

export const CoffeeItemButtonRemove = styled.button`
  display: flex;
  height: 2rem;
  padding: 0rem 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  background: ${(props) => props.theme["gray-400"]};

  font-family: Roboto;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  text-transform: uppercase;
  color: ${(props) => props.theme["gray-700"]};

  & > svg {
    color: ${(props) => props.theme["purple-300"]};
  }

  &:hover {
    background: ${(props) => props.theme["gray-500"]};
  }
`;

export const CoffeItemPrice = styled.span`
  font-family: "Roboto";
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  color: ${(props) => props.theme["gray-700"]};
  margin-left: auto;
`;
