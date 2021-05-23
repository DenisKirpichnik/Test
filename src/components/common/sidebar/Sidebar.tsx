import React from "react";
import { JOIBtn, JOIdiv, JOItext } from "../SharedStyles";
import { SidebarMainWrapper, StyledTwitterIcon } from "./SidebarStyles";

export const Sidebar = () => {
  return (
    <SidebarMainWrapper>
      <JOItext color="#c265e3" margin="20px auto 0px auto" width="50px">
        JOI
      </JOItext>
      <JOIdiv flexdirection="column" background="white" margin="auto 0px auto 0px" height="25%">
        <JOIBtn
          background="white"
          color="#c265e3"
          boxshadow="0px 1px 1px 1px rgba(0, 0, 0, 0.2)"
          margin="20px auto 40px auto"
        >
          Pools
        </JOIBtn>
        <JOIBtn
          background="white"
          color="#c265e3"
          boxshadow="0px 1px 1px 1px rgba(0, 0, 0, 0.2)"
          margin="0px auto 0px auto"
        >
          Mission
        </JOIBtn>
      </JOIdiv>
      <JOIdiv
        width="86%"
        flexdirection="row"
        background="white"
        margin=" auto auto 0px auto "
        color="#c265e3"
        height="7%"
        justifycontent="space-between"
      >
        <JOItext fontsize="25px" color="#c265e3">
          $30.10
        </JOItext>
        <JOIBtn width="49px" height="49px" color="#1da1f2" background="none" margin="-5px 0px 0px 0px">
          <StyledTwitterIcon />
        </JOIBtn>
      </JOIdiv>
    </SidebarMainWrapper>
  );
};
