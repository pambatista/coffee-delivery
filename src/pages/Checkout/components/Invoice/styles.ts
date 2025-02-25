import styled from "styled-components";

export const TitleEmpty = styled.span`
  font-family: "Roboto";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  color: ${(props) => props.theme["gray-700"]};

  padding-bottom: 1.5rem;

  display: block;
  text-align: center;
`;

export const TotalInvoiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${(props) => props.theme["gray-400"]};
`;

export const TotalInvoiceInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > span {
    font-family: "Roboto";
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme["gray-700"]};
  }

  & > strong {
    font-family: "Roboto";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme["gray-700"]};
  }
`;

export const ButtonConfirmeContainer = styled.button`
  width: 100%;
  height: 2.875rem;
  border-radius: 6px;
  background: ${(props) => props.theme["yellow-500"]};
  color: ${(props) => props.theme["white"]};
  font-family: "Roboto";
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  margin-top: 1.5rem;

  &:hover {
    background: ${(props) => props.theme["yellow-700"]};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
