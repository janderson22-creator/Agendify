import styled from "styled-components";

interface Props {
  checked: boolean;
}

export const Container = styled.div`
  border: transparent;
  border-radius: 0 50px 50px 0;
  position: fixed;
  left: 0;
  top: 50px;
  width: 210px;
  height: 90%;
  background: linear-gradient(
      86.57deg,
      #373740 47.14%,
      #2f3a59 90.82%,
      #738cbf 167.05%
    ),
    linear-gradient(0deg, #ffffff, #ffffff);
  box-shadow: 2px 5px 20px 1px rgba(0, 0, 0, 0.4);
`;

export const ItemsMenu = styled.div`
  padding: 0 15px;
  padding-top: 20px;
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
`;

export const NameLink = styled.span<Props>`
  /* display: ${(props: any) => (props.collapsedd ? "none" : "block")}; */
  font-size: 14px;
  font-weight: 600;
  color: ${(props: any) =>
    props.checked ? "rgba(244, 244, 246, 1)" : "rgba(202, 202, 229, 1)"};
  margin-left: 15px;
`;

export const ArrowButtonContainer = styled.div`
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
