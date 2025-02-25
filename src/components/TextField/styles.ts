import styled from "styled-components";

export const TextFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  & > span {
    color: ${(props) => props.theme["red-500"]};
    font-size: 0.75rem;
  }
`;

export const TextFieldInput = styled.input`
  width: 100%;
  display: flex;
  padding: 0.75rem;
  align-items: center;
  gap: 0.25rem;

  border-radius: 0.25rem;
  border: 1px solid ${(props) => props.theme["gray-400"]};
  background: ${(props) => props.theme["gray-300"]};

  color: ${(props) => props.theme["gray-700"]};
  font-family: Roboto;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;

  ::placeholder {
    color: ${(props) => props.theme["gray-600"]};
  }
`;
