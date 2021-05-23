import styled from "styled-components";
import { JOIdiv, JOItext } from "../../components/common/SharedStyles";

export const SecondPageMainWrapper = styled(JOIdiv)`
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const LongPinkText = styled(JOItext)`
  @media (max-width: 768px) {
    width: 90%;
    margin: 0px auto 0px auto;
    padding-bottom: 40px;
  }
`;

export const SquareEmptyDIv = styled(JOIdiv)`
  @media (max-width: 768px) {
    width: 340px !important;
    height: 600px;
    margin: 10px auto 10px auto;
    padding-bottom: 40px;
    background: white;
  }
`;

export const BottomMainDiv = styled(JOIdiv)`
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    width: 100%;
  }
`;

export const BottomRightDataDiv = styled(JOIdiv)`
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    margin: 0px 0px 0px 0px;
  }
`;

export const DataPoint = styled(JOItext)`
  @media (max-width: 768px) {
    width: 90%;
    margin: 10px auto 0px 65px;
  }
`;

export const BottomLeftDiv = styled(JOIdiv)`
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const TopHalfDiv = styled.div`
  display: flex;
  flex-direction: column;
  background: #c265e3;
`;

export const BottomHalfDiv = styled.div`
  display: flex;
  background: white;
`;

export const BottomHalfDivLeft = styled.div`
  flex: 0.6;
`;

export const BottomHalfDivRight = styled.div`
  flex: 0.2;
`;
