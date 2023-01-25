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
  height: 780px;
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

export const TextAboutUs = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: black;
  border-bottom: 1px solid rgba(235, 235, 240, 1);
  padding-bottom: 10px;
  width: 50%;
  text-align: center;
`;

export const TextSub = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #778877;
  text-align: center;
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
`;
export const Card = styled.img`
  max-width: 100px;
  min-width: 100px;
  margin-right: 10px;
  cursor: pointer;
`;

export const Shadow = styled.div`
  background: linear-gradient(
    271.31deg,
    #000000 -9.52%,
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
  top: 45px;
  z-index: 2;
  ::before {
    display: none;
  }
`;
export const ArrowLeft = styled.div``;
