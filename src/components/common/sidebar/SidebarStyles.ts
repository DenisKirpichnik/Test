import styled from "styled-components";
import TwitterIcon from "@material-ui/icons/Twitter";
import { JOIBtn, JOIdiv, JOItext } from "../SharedStyles";

export const SidebarMainWrapper = styled(JOIdiv)`
  display: flex;
  flex-direction: column;
  background: white;
  margin: 0px 0px 0px 0px;
  height: 100vh;
  width: 18%;
  border-right: 1px lightgray solid;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const SidebarDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.18;
  background: white;
  min-height: 100vh;
`;

export const BottomFlexDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledTwitterIcon = styled(TwitterIcon)`
  font-size: 35px !important;
  margin-top: -10px;
`;
