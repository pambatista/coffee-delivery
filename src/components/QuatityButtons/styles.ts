import styled from "styled-components";

export const QuantityButtonsContianer = styled.div`
  display: inline-flex;
  height: 2rem;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;

  border-radius: 0.375rem;
  background: ${(props) => props.theme["gray-400"]};

  color: ${(props) => props.theme["gray-800"]};
  text-align: center;
  font-family: "roboto" sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;

  button {
    border: none;
    background: none;
    cursor: pointer;

    color: ${(props) => props.theme["purple-500"]};

    &:hover {
      color: ${(props) => props.theme["purple-300"]};
    }
  }
`;
