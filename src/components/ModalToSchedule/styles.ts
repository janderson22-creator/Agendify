import styled from "styled-components";

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 10;
  @media (max-width: 1023px) {
    z-index: 29;
  }
`;

export const Container: any = styled.div`
  height: fit-content;
  max-height: 780px;
  width: 900px;
  border-radius: 10px;
  margin: auto;
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  background-color: #171821;
  z-index: 15;
  padding: 30px 30px;

  animation: toTop 0.3s linear;
  opacity: 1;

  @keyframes toTop {
    0%,
    50% {
      opacity: 0;
      bottom: -400px;
    }
    100% {
      opacity: 1;
      bottom: 0;
    }
  }

  @media (max-width: 1023px) {
    width: 100%;
    top: unset;
    padding-left: 0;
    padding-right: 0;
    padding-top: 10px;
    padding-bottom: 20px;
    border-radius: 10px 10px 0 0;
    height: fit-content;
    z-index: 30;
    transform: unset;
    visibility: unset;
    opacity: unset;
    transition: unset;
    animation: toTop 0.4s ease;

    @keyframes toTop {
      0%,
      50% {
        bottom: -700px;
      }
      100% {
        bottom: 0;
      }
    }
  }
`;