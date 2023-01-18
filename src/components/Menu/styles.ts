import styled from "styled-components";

interface Props {
  checked?: boolean;
  show?: boolean
}

export const Container = styled.div<Props>`
  border: transparent;
  border-radius: 0 50px 50px 0;
  position: fixed;
  left: 0;
  top: 50px;
  width: ${(props) => (props.show ? '90px' : '210px')};
  height: 90%;
  background: linear-gradient(
      86.57deg,
      #373740 47.14%,
      #2f3a59 90.82%,
      #738cbf 167.05%
    ),
    linear-gradient(0deg, #ffffff, #ffffff);
  box-shadow: 2px 5px 20px 1px rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease-in;
`;

export const ItemsMenu = styled.div`
  padding-left: 15px;
  padding-top: 20px;
  padding-right: 25px;
`;

export const ContainerLink = styled.div<Props>`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 45px;
  margin-bottom: 10px;
  border-radius: 200px;
  padding-left: 15px;
  background: ${(props) => (props.checked ? "#2F3A59" : "transparent")};
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

  :first-child {
    padding-left: 13px;
  }
`;

export const Icon = styled.div<Props>`
  svg {
    path {
      fill: ${(props) => (props.checked ? "#F4F4F6" : "#BBBBD2")};
    }
  }
`;

export const NameLink = styled.span<Props>`
  display: ${(props: any) => (props.show ? "none" : "block")};
  opacity: ${(props: any) => (props.show ? "0" : "1")};
  font-size: 14px;
  font-weight: 600;
  color: ${(props: any) =>
    props.checked ? "rgba(244, 244, 246, 1)" : "rgba(202, 202, 229, 1)"};
  margin-left: 15px;
  animation: textOpacity 1s cubic-bezier(0.53, -0.03, 0.67, 1.06);
  animation-direction: alternate;
  animation-iteration-count: 1;

  @keyframes textOpacity {
    0% {
      transform: translateX(-200px);
      opacity: 0;
      visibility: hidden;
    }
    100% {
      transform: translateX(0);
      visibility: visible;
      opacity: 1;
    }
  }
`;

export const ArrowButtonContainer = styled.div<Props>`
  background: #fff;
  width: 42px;
  height: 42px;
  border-radius: 100%;
  position: absolute;
  right: -20px;
  top: 0;
  bottom: 0;
  margin: auto 0;
  padding: 3px;
  cursor: pointer;
  transform: ${(props) => props.show ? 'rotate(180deg)' : 'rotate(0deg)'};
  transition: all 0.3s ease-in;
` 
export const ContainerIcon = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  background: #738CBF;
  display: flex;
  align-items: center;
  justify-content: center;
`
