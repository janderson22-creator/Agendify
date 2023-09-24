import styled from "styled-components";

interface Props {
  checked?: boolean;
  name?: string;
}

export const Container = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: fixed;
  top: 0;
  background: linear-gradient(
      86.57deg,
      #373740 47.14%,
      #2f3a59 90.82%,
      #738cbf 167.05%
    ),
    linear-gradient(0deg, #ffffff, #ffffff);
  box-shadow: 2px 5px 20px 1px rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease-in;

  @media (max-width: 1023px) {
    position: fixed;
    top: unset;
    bottom: 15px;
    border-radius: 200px;
    width: 90%;
    height: unset;
    margin: 0 auto;
    left: 0;
    right: 0;
    padding: 10px 0;
    display: flex;
  }
`;

export const ContainerLink = styled.div`
  transition: all 0.3s ease-in;
  :hover {
    background: #2f3a59;
    span {
      color: rgba(244, 244, 246, 1);
    }
    div {
      svg {
        path {
          fill: #f4f4f6;
        }
      }
    }
  }
`;

export const Icon = styled.div<Props>`
  svg {
    path {
      fill: ${(props) => (props.checked ? "#F4F4F6" : "#BBBBD2")};
    }
  }
  @media (max-width: 1023px) {
    svg {
      width: 20px;
    }
  }
`;