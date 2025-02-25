import styled from "styled-components";

export const CoffeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  position: relative;

  padding: 1.25rem;
  border-radius: 6px 36px;
  background: ${(props) => props.theme["gray-200"]};

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -3rem;
  }

  & > h3 {
    font-family: "Baloo 2", sans-serif;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme["gray-800"]};
    margin: 0;
  }

  & > span {
    color: ${(props) => props.theme["gray-600"]};
    text-align: center;

    font-family: Roboto;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
`;

export const ChipsGroup = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;
  margin-top: 0.5rem;
`;

export const Chip = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 1000px;
  background: ${(props) => props.theme["yellow-300"]};

  font-family: "Roboto", sans-serif;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  text-transform: uppercase;
  color: ${(props) => props.theme["yellow-700"]};
`;

export const Price = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-top: 0.5rem;

  & > span {
    font-family: "Baloo 2", sans-serif;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme["gray-800"]};

    &:before {
      content: "R$ ";
      font-family: "Roboto", sans-serif;
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
    }
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

type AddToCarButtonProps = {
  selected: boolean;
};
export const AddToCartButton = styled.button<AddToCarButtonProps>`
  display: flex;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  border-radius: 6px;
  background: ${(props) =>
    props.selected ? props.theme["purple-300"] : props.theme["purple-500"]};

  color: ${(props) => props.theme["white"]};
  text-align: center;
  font-family: "roboto" sans-serif;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;

  border: none;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme["purple-300"]};
  }
`;
