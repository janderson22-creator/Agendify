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
  width: 550px;
  border-radius: 10px;
  margin: auto;
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  z-index: 15;
  padding-top: 20px;
  padding-bottom: 100px;

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

export const TextAboutUs = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: black;
  border-bottom: 1px solid rgba(235, 235, 240, 1);
  padding-bottom: 10px;
  width: 50%;
  text-align: center;

  @media (max-width: 1023px) {
    font-size: 16px;
  }
`;

export const TextSub = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #778877;
  text-align: center;

  @media (max-width: 1023px) {
    font-size: 12px;
  }
`;

export const ContainerCards = styled.div`
  padding-left: 30px;
  margin-top: 25px;
  position: relative;
  .slick-prev {
    background: black;
    border: 1px solid black;
    visibility: hidden;
  }

  @media (max-width: 1023px) {
    padding-left: 15px;

    .slick-next {
      background: black;
      border: 1px solid black;
      visibility: hidden;
    }
  }
`;

export const Shadow = styled.div`
  background: linear-gradient(
    271.31deg,
    #000000 -59.52%,
    rgba(0, 0, 0, 0) 126.67%
  );
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 40px;
  z-index: 1;
`;

export const ArrowRight = styled.div`
  position: absolute;
  right: 20px;
  top: 35px;
  z-index: 2;
  ::before {
    display: none;
  }
`;

export const LabelInformation = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #3f3f3f;

  @media (max-width: 1023px) {
    font-size: 14px;
  }
`;

export const Subtitle = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #787878;

  @media (max-width: 1023px) {
    font-size: 12px;
  }
`;

export const Icon = styled.div`
  cursor: pointer;
  width: 44px;
  height: 44px;
  background: rgba(180, 179, 210, 0.25);
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;

  @media (max-width: 1023px) {
    width: 34px;
    height: 34px;
  }
`;
