import React from "react";
import styled from "styled-components";
import { JOIBtn, JOIdiv, JOItext } from "../../components/common/SharedStyles";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useHistory } from "react-router-dom";
import {
  BottomMainDiv,
  LongPinkText,
  SecondPageMainWrapper,
  BottomRightDataDiv,
  DataPoint,
  SquareEmptyDIv,
  BottomLeftDiv,
} from "./SecondPageStyles";

const StyledArrowBackIosIcon = styled(ArrowBackIosIcon)`
  font-size: 35px !important;
`;

export const SecondPage = () => {
  const history = useHistory();

  const goBack = () => {
    history.push("/");
  };

  return (
    <SecondPageMainWrapper background="#edcdf8" color="#c165e3" flexdirection="column" height="100%" width="82%">
      {/* TOP DIV */}
      <JOIdiv
        descr="TOP OUTER DIV"
        background="#edcdf8"
        color="#c165e3"
        flexdirection="column"
        height="40%"
        padding="0px 10px 40px 10px"
      >
        {/* <JOIdiv descr="GRAY STRIP AT TOP" background="#ffffff" flexdirection="row" height="40px"></JOIdiv> */}
        <JOIdiv
          descr="REST OF THE DIV -PINK ZONE "
          background="#edcdf8"
          color="#c165e3"
          flexdirection="column"
          height="100%"
        >
          <JOIdiv descr="FLEX DIV FOR ARROW AND HEADER" background="#edcdf8" color="#c165e3" flexdirection="row">
            <JOIBtn
              onClick={() => goBack()}
              background="none"
              color="black"
              width="20px"
              height="20px"
              margin="17px 0px 0px 25px"
            >
              <StyledArrowBackIosIcon />
            </JOIBtn>

            <JOItext color="#c165e3" fontweight="600" fontsize="35px" width="70%" margin="15px 0px 15px 25px">
              Project ALPHA
            </JOItext>
          </JOIdiv>
          <LongPinkText color="#c165e3" fontweight="400" fontsize="28px" width="70%" margin="0px 0px 40px 70px">
            Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble ed it to make a
            type specimen book.{" "}
          </LongPinkText>
        </JOIdiv>
      </JOIdiv>
      {/*BOTTOM DIV */}
      <BottomMainDiv background="white" color="#c165e3" flexdirection="row" height="60%" width="100%">
        <BottomLeftDiv descr="BOTTOM LEFT DIV" width="70%" height="100%" background="white" flexdirection="row">
          <SquareEmptyDIv
            color="white"
            descr="BOTTOM LEFT INNER DIV"
            width="700px"
            height="400px"
            margin="63px auto 50px auto"
            boxshadow="0px 2px 3px 1px rgba(0, 0, 0, 0.2)"
            background="white"
          ></SquareEmptyDIv>
        </BottomLeftDiv>
        <BottomRightDataDiv
          descr="BOTTOM RIGHT DIV"
          color="#c165e3"
          width="30%"
          height="300px"
          background="white"
          flexdirection="column"
          margin="33px 0px 0px -50px"
        >
          <DataPoint fontsize="48px" fontweight="700" margin="20px auto 0px 5px" color="#c165e3">
            DATA
          </DataPoint>
          <DataPoint fontsize="32px" fontweight="400" margin="30px auto 0px 0px" color="#c165e3">
            960 investors
          </DataPoint>
          <DataPoint fontsize="32px" fontweight="400" margin="20px auto 0px 0px" color="#c165e3">
            total stacked 10M
          </DataPoint>
          <DataPoint fontsize="32px" fontweight="400" margin="20px auto 0px 0px" color="#c165e3">
            $30
          </DataPoint>
          <JOIBtn
            padding="5px 0px 5px 0px"
            background="#c265e3"
            fontsize="28px"
            fontweight="700"
            width="243px"
            height="41px"
            margin="50px auto 0px 50px"
          >
            Stake
          </JOIBtn>
        </BottomRightDataDiv>
      </BottomMainDiv>
    </SecondPageMainWrapper>
  );
};
