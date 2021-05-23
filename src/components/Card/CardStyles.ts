import styled from "styled-components";
import { JOIdiv } from "../common/SharedStyles";

export const MainCardWrapper = styled(JOIdiv)`
  @media (max-width: 768px) {
    width: 95%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

// export const MainCardWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   background: white;
//   width: 443px;
//   height: 100%;
//   background: white;
// `;

export const TopFlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #c265e3;
  padding-bottom: 40px;
`;

export const CardHeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BottomFlexDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
