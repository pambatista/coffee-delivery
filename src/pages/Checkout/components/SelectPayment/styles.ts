import styled from "styled-components";

interface SelectPaymentContainerProps {
  selected?: boolean;
}

export const SelectPaymentContainer = styled.div<SelectPaymentContainerProps>`
  display: flex;
  padding: 1rem;
  align-items: center;
  gap: 0.75rem;
  flex: 1 0 0;
  cursor: pointer;

  border-radius: 0.375rem;
  background: ${(props) =>
    props.selected ? props.theme["purple-100"] : props.theme["gray-400"]};

  border: 1px solid
    ${(props) =>
      props.selected ? props.theme["purple-300"] : props.theme["gray-400"]};

  color: ${(props) => props.theme["gray-700"]};

  font-family: Roboto;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  text-transform: uppercase;

  & > svg {
    color: ${(props) => props.theme["purple-300"]};
  }
`;
