import styled from "styled-components";

interface Props {
  checked?: boolean;
  show?: boolean;
  name?: string;
}

export const Container = styled.div<Props>`
  border: transparent;
  border-radius: 0 50px 50px 0;
  position: fixed;
  left: 0;
  top: 50px;
  width: ${(props) => (props.show ? "90px" : "210px")};
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

  @media (max-width: 1023px) {
    top: unset;
    bottom: 15px;
    border-radius: 200px;
    width: 90%;
    height: unset;
    margin: 0 auto;
    left: 0;
    right: 0;
    padding: 0;
    display: flex;
  }
`;

export const ItemsMenu = styled.div`
  padding-left: 15px;
  padding-top: 20px;
  padding-right: 25px;

  @media (max-width: 1023px) {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    padding: 10px 15px;
    padding-left: 0;
  }
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

  @media (max-width: 1023px) {
    flex-direction: column;
    justify-content: center;
    padding: 0;
    margin: 0;
    height: unset;
    background: unset;
    width: 100%;
    :hover {
      background: unset;
    }
    :first-child {
      padding-left: 0;
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

  @media (max-width: 1023px) {
    display: flex;
    font-size: 11px;
    animation: unset;
    text-align: center;
    margin-left: 4px;
    margin-top: ${(props) => (props.name === "Inicio" ? "2px" : "6px")};
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
  transform: ${(props) => (props.show ? "rotate(180deg)" : "rotate(0deg)")};
  transition: all 0.3s ease-in;

  @media (max-width: 1023px) {
    display: none;
  }
`;
export const ContainerIcon = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  background: #738cbf;
  display: flex;
  align-items: center;
  justify-content: center;
`;
