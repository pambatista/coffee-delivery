import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 28rem;
  gap: 2.5rem;
  margin-top: 2.5rem;

  h3 {
    font-family: "Baloo 2", sans-serif;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme["gray-800"]};
    margin: 0;
  }
`;

export const BaseContent = styled.div`
  border-radius: 0.375rem;
  background: ${(props) => props.theme["gray-200"]};
  padding: 2.5rem;
  margin-top: 1rem;
`;

export const CheckoutForm = styled(BaseContent)``;

export const CheckoutFormContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 3.75rem;
  gap: 1rem;
  margin-top: 2rem;

  .street {
    grid-column: span 3;
  }

  .complement {
    grid-column: span 2;
  }
`;

interface CheckoutFromTitleProps {
  iconColor: string;
}

export const CheckoutFromTitle = styled.div<CheckoutFromTitleProps>`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;

  & h4 {
    color: ${(props) => props.theme["gray-800"]};

    font-family: Roboto;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    margin-bottom: 0.5rem;
  }

  & span {
    color: ${(props) => props.theme["gray-700"]};
    font-family: Roboto;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }

  svg {
    color: ${(props) =>
      props.iconColor === "purple"
        ? props.theme["purple-300"]
        : props.theme["yellow-700"]};
  }
`;

export const CheckoutSummary = styled(BaseContent)`
  border-radius: 0.375rem 2.75rem;
`;

export const PaymentMethodsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  align-self: stretch;
  margin-top: 2rem;
`;
