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
`;

export const CommerceName = styled.p`
  font-size: 28px;
  font-weight: 700;
  color: #0D0D0D;
`;
export const CommerceType = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #0D0D0D;
`;

export const TimeOpen = styled.div<Props>`
  background: ${(props) =>
    props.open ? "rgba(218, 242, 238, 1)" : "rgba(255, 229, 229, 1)"};
  border-radius: 100px;
  width: fit-content;
  padding: 5px 0px;
  padding-left: 18px;
  padding-right: 51px;
  display: flex;
  align-items: center;

  font-size: 14px;
  font-weight: 500;
  color: #5f5f61;
`;

export const Icon = styled.div<Props>`
  width: 11px;
  height: 11px;
  background: ${(props) => (props.open ? "rgba(37, 221, 55, 1)" : "#F0AFAF")};
  border-radius: 100%;
  margin-right: 51px;
`;

export const KnowMore = styled.span`
  cursor: pointer;
  border-radius: 100px;
  border: none;
  background: #738cbf;
  padding: 8px 30px;

  font-size: 18px;
  font-weight: 400;
  color: #0D0D0D;
`;
