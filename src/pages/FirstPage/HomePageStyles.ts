import styled from "styled-components";
import { JOIdiv, JOIBtn, JOItext } from "../../components/common/SharedStyles";

export const HomePageMainWrapperDiv = styled(JOIdiv)`
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const HomePageConnectButton = styled(JOIBtn)`
  @media (max-width: 768px) {
    margin: 10px 10px 10px auto;
  }
`;

export const AppHeaderText = styled(JOItext)`
  @media (max-width: 768px) {
    width: 250px;
    margin: 10px auto 10px auto;
  }
`;

export const AppHeaderP = styled(JOItext)`
  @media (max-width: 768px) {
    font-size: 25px;
    width: 90%;
    overflow-wrap: break-word;
    margin: 0px auto 30px auto;
    padding: 0px 10px 0px 20px;
  }
`;

export const MainRightDiv = styled(JOIdiv)`
  @media (max-width: 768px) {
    width: 100%;
    margin: 0px 0px 0px 0px;
  }
`;

export const HeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardHorizFlexDiv = styled.div`
  display: flex;
  margin: 40px auto 0px auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media (max-width: 768px) {
    flex-direction: column;
    background: #f1f1fa;
    padding-bottom: 20px;
  }
`;
