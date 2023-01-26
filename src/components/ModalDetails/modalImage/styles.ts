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
  height: 880px;
  width: 950px;
  border-radius: 10px;
  margin: auto;
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  z-index: 15;
  padding-top: 20px;

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
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 20px;
    border-radius: 10px 10px 0 0;
    height: 330px;
    z-index: 30;
    transform: unset;
    visibility: unset;
    opacity: unset;
    transition: unset;
    animation: toTop 0.4s ease;

    @keyframes toTop {
      0%,
      50% {
        bottom: -500px;
      }
      100% {
        bottom: 0;
      }
    }
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`
