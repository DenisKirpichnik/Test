import React from "react";

import { JOIBtn, JOIdiv, JOItext } from "../../components/common/SharedStyles";
import { Card } from "../../components/Card/Card";
import {
  CardHorizFlexDiv,
  HeaderDiv,
  MainRightDiv,
  HomePageMainWrapperDiv,
  HomePageConnectButton,
  AppHeaderText,
  AppHeaderP,
} from "./HomePageStyles";

export const HomePage = () => {
  return (
    <HomePageMainWrapperDiv
      flexdirection="column"
      background="#f1f1fa"
      margin="0px 0px 0px 0px"
      height="100vh"
      width="82%"
      color="#c265e3"
    >
      <HomePageConnectButton
        descr="HOMEPAGE CONNECT BUTTON"
        background="#dca6ef"
        fontsize="23px"
        width="134px"
        height="30px"
        margin="15px 15px 0px auto"
        padding="0px 0px 0px 0px"
      >
        Connect
      </HomePageConnectButton>
      <HeaderDiv>
        <MainRightDiv
          background="#f1f1fa"
          flexdirection="column"
          color="#c265e3"
          width="70%"
          margin="0px auto 20px 40px"
        >
          <AppHeaderText color="#c265e3" margin="0px 0px 10px 0px">
            App DeFi-zation
          </AppHeaderText>
          <AppHeaderP color="#c265e3" fontweight="400">
            Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble ed it to make a
            type specimen book.{" "}
          </AppHeaderP>
        </MainRightDiv>
        <CardHorizFlexDiv>
          <Card projectName={"Project ALPHA"} />
          <Card projectName={"Project BETA"} />
        </CardHorizFlexDiv>
      </HeaderDiv>
    </HomePageMainWrapperDiv>
  );
};
