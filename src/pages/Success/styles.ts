import styled from "styled-components";

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 5rem;

  & > img {
    width: 10rem;
    height: 10rem;
  }

  & > h1 {
    font-family: "Baloo 2", sans-serif;
    font-size: 2rem;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme["yellow-700"]};
    margin: 0;
    margin-top: 1rem;
  }

  & > p {
    font-family: "Roboto", sans-serif;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme["gray-700"]};
    margin: 0;
    margin-top: 0.5rem;
  }
`;

export const SuccessContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6.375rem;
  margin-top: 2.5rem;
`;

export const SuccessInfo = styled.div`
  position: relative;
  width: 32.875rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2.5rem;

  border-radius: 0.375rem 2.25rem;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    padding: 1px;
    border-radius: 0.375rem 2.25rem;
    background: linear-gradient(
      45deg,
      ${(props) => props.theme["yellow-500"]} 0%,
      ${(props) => props.theme["purple-300"]} 100%
    );
    -webkit-mask: linear-gradient(white 0 0) content-box,
      linear-gradient(white 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`;

export const SuccessInfoItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  max-width: 22.5rem;

  font-family: Roboto;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }
`;

interface SuccessInfoIconProps {
  type: "location" | "payment" | "time";
}

export const SuccessInfoIcon = styled.div<SuccessInfoIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 1000px;

  background: ${(props) =>
    props.type === "location"
      ? props.theme["purple-300"]
      : props.type === "payment"
      ? props.theme["yellow-500"]
      : props.theme["yellow-700"]};

  & > svg {
    color: ${(props) => props.theme["white"]};
  }
`;
