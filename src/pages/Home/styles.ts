import styled from "styled-components";

interface Props {
  open?: boolean;
}

export const Container = styled.div``;

export const Header = styled.div`
  box-shadow: 0px 0px 10.666666984558105px 1.7777777910232544px
    rgba(0, 0, 0, 0.1);
  border-radius: 0 0 17px 17px;
  padding-bottom: 15px;
`;

export const CoverImage = styled.img`
  min-width: 100%;
  max-height: 250px;
  object-fit: cover;
  opacity: 0.6;

  @media (max-width: 1023px) {
    max-height: 150px;
  }
`;

export const ProfileImage = styled.img`
  max-width: 150px;
  max-height: 150px;
  border-radius: 100%;
  margin: 0 auto;
  left: 0;
  right: 0;
  position: absolute;
  bottom: -50px;
  border: 5px solid white;
  object-fit: cover;

  @media (max-width: 1023px) {
    max-width: 100px;
    max-height: 100px;
    border: 3px solid white;
    bottom: -25px;
  }
`;

export const CommerceName = styled.p`
  font-size: 26px;
  font-weight: 700;
  color: #0d0d0d;

  @media (max-width: 1023px) {
    font-size: 16px;
    font-weight: 600;
    text-align: left;
  }
`;
export const CommerceType = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #0d0d0d;

  @media (max-width: 1023px) {
    font-size: 12px;
  }
`;

export const TimeOpen = styled.div<Props>`
  background: ${(props) =>
    props.open ? "rgba(218, 242, 238, 1)" : "rgba(255, 229, 229, 1)"};
  border-radius: 12px;
  width: fit-content;
  padding: 5px 0px;
  padding-left: 18px;
  padding-right: 51px;
  display: flex;
  align-items: center;

  font-size: 14px;
  font-weight: 500;
  color: #5f5f61;

  @media (max-width: 1023px) {
    font-size: 10px;
    padding: 3px 10px;
    white-space: nowrap;
  }
`;

export const Icon = styled.div<Props>`
  width: 11px;
  height: 11px;
  background: ${(props) => (props.open ? "rgba(37, 221, 55, 1)" : "#F0AFAF")};
  border-radius: 100%;
  margin-right: 51px;

  @media (max-width: 1023px) {
    width: 9px;
    height: 9px;
    margin-right: 10px;
  }
`;

export const KnowMore = styled.span`
  cursor: pointer;
  border-radius: 12px;
  border: none;
  background: #fff;
  border: 2px solid #738cbf;
  padding: 8px 30px;

  font-size: 18px;
  font-weight: 500;
  color: #0d0d0d;

  @media (max-width: 1023px) {
    padding: 4px 15px;
    font-size: 12px;
  }
`;

export const Services = styled.div`
  box-shadow: 0px 0px 10.666666984558105px 1.7777777910232544px
    rgba(0, 0, 0, 0.1);
  border-radius: 17px;
  margin-top: 20px;
  padding: 20px;
`;

export const TitleName = styled.p`
  font-size: 22px;
  font-weight: 700;
  color: #0d0d0d;

  @media (max-width: 1023px) {
    font-size: 16px;
    font-weight: 600;
    text-align: left;
  }
`;

export const Card = styled.div`
  border: 1px solid #D4D4DE;
  border-radius: 8px;
  padding-top: 15px;
  width: 100%;
  max-width: 350px;
  height: 450px;
`
